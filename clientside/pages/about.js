import Link from "next/link";
import Card from "react-bootstrap/Card";
import BookDetails from "@/components/BookDetails";
import PageHeader from "@/components/PageHeader";

export async function getStaticProps(){
    const response = await fetch("https://openlibrary.org/works/OL37044591M.json");

    const data = await response.json();

    return{props:{book:data},}
}

export default function About(props){

    return(
        <>
       <PageHeader text="About the Book"/>
       <br/>
       <BookDetails book={props.book}/>
        </>
    )
}