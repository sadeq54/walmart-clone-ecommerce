import Product from "@/components/Product";
import fetchSearch from "@/lib/fitchSearch";


type Props = {
  searchParams: {
    q: string;
  }
}

export default async function page({ searchParams: { q } }: Props) {
  // search the search Results 
  const results = await fetchSearch(q)

 
  return (
    <div className="p-10">
      <h1 className="text-3x1 font-bold mb-2">Results for {q}</h1>
      <h2 className="mb-5 text-gray-400">
        ({results?.content.page_details.total_results} results)
      </h2>
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {results?.content?.results?.map((product) => (
       <li key = {product.general.product_id + Math.random()*10} className="">
          <Product  product={product} />
          
       </li>
       
      ))}
    </ul>

    </div>
  )
}

