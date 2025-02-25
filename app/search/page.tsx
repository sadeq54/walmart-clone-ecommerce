import fetchSearch from "@/lib/fitchSearch";

type Props = {
    searchParams:{
        q:string;
    }
}

export default async function page({searchParams : {q}} : Props) {
    // search the search Results 
    const results = await  fetchSearch(q)
    console.log(results)
  return (
    <div>
      search page 
    </div>
  )
}
