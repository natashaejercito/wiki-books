import useSWR from "swr";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Pagination, Table } from "react-bootstrap";
import PageHeader from "@/components/PageHeader";
export default function Home() {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([])

  const router = useRouter()

  const author = "Okakura Kakuzo"

  const {data, error} = useSWR(`https://openlibrary.org/search.json?q=author:${encodeURIComponent(author)}&page=${page}&limit=10`)

  useEffect(()=>{
    if(data){
      setPageData(data);
    }
  },[data])

  function previous(){
    if(page > 1){
      setPage(page-1)
    }
  }

  function next(){
    setPage(page + 1)
  }
  return (
    <>
     <PageHeader text={`Novels by ${author}`}/>
     <Table stripped hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Published</th>
        </tr>
      </thead>
      <tbody>
        {pageData?.docs?.map((book)=>{
          <tr key={book.key}
          onClick={()=> router.push(book.key)}
          style={{cursor:"pointer"}}>
            <td>{book.title}</td>
            <td>{book.first_publish_year ?? "N/A"}</td>
          </tr>
        })}
      </tbody>
     </Table>
     <Pagination>
      <Pagination.Prev onClick={previous}/>
      <Pagination.Item active>{page}</Pagination.Item>
      <Pagination.Next onClick={next}/>
     </Pagination>
    </>
  );
}