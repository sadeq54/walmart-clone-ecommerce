// to desructure the searchParams from the props, we can use the following syntax
// see the product component , the link component is used to navigate to the product page

import fitchProduct from "@/lib/fitchProduct";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import AddToCart from "@/components/AddToCart";

// the pathname is set to /product and the query is set to the url of the product
type Props = {
    searchParams: {
        url: string;
    }
}


export default async function ProductPage({ searchParams: { url } }: Props) {
    const product = await fitchProduct(url)
    if (!product) return notFound()

    return (
        <div className="p-4 lg:p-10 flex flex-col lg:flex-row w-full">
            <div className="hidden lg:inline space-y-4">
                {product.content.general.images.map((image, i) => (
                    <Image
                        key={product.content.general.title + Math.random() * 100}
                        src={image}
                        alt={product.content.general.title + " " + i}
                        width={90}
                        height={90}
                        className="border rounded-sm"
                    />

                ))}
            </div>
            <Carousel
                opts={{
                    loop: true,
                }}
                className="w-3/5 mb-10 lg:mb-0 lg:w-1/3 self-start flex items-center max-w-xl mx-auto lg:mx-20"
            >
                <CarouselContent>
                    {product.content.general.images.map((image, i) => (
                        <CarouselItem key={product.content.general.title + Math.random() * 100}>
                            <div className="p-1">
                                <div className="flex aspect-square items-center justify-center p-2 relative">
                                    <Image
                                        src={image}
                                        alt={product.content.general.title + " " + i}
                                        width={400}
                                        height={400}

                                    />
                                </div>
                            </div>
                        </CarouselItem>
                    )
                    )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <div className="flex-1 border rounded-md w-full p-5 space-y-5">
                <h1 className="text-3xL">
                    {product.content.general.title}
                </h1>
                <div className="space-x-2">
                    {product.content.breadcrumbs.map((breadcrumb, i) => (
                        <Badge
                            key={breadcrumb.category_name + Math.random() * 100 + i}
                            className={breadcrumb.category_name}
                            variant={"outline"}
                        >
                            {breadcrumb.category_name}
                        </Badge>
                    ))}
                </div>

                <div
                    dangerouslySetInnerHTML={{ __html: product.content.general.description }}
                    className="py-5"
                />
                {product.content.rating && (
                    <p className="text-yellow-500 text-sm flex gap-2 items-center">
                        {product.content.rating.rating}
                        <Star size={16} />

                        <span className="text-gray-400 ml-2">
                            ({product.content.rating.rating} reviews)
                        </span>
                    </p>
                )}

                <p className="text-2xl font-bold mt-2">
                    {product.content.price.currency} {product.content.price.price}
                </p>
                {/* Add to Cart button */}
                <AddToCart product = {product} />
                <hr />

                <h3 className="font-bold text-xl pt-10">
                    Specifications
                </h3>

                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="">Spacifications</TableHead>
                            <TableHead>Value</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {product.content.specifications.map((spec) =>
                            <TableRow key={spec.key}>
                                <TableCell className="font-bold" >
                                    {spec.key}
                                </TableCell>
                                <TableCell>{spec.value}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>

            </div >
        </div >
    )
}
