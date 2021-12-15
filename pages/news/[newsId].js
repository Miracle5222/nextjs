import { useRouter } from 'next/router';


function DetailPage() {
    const router = useRouter();
    console.log(router.query.newsId);
  

    return (
        <div>
            <h1>Hello World</h1>
             <button onClick={()=> router.push('/')}>click me</button>
           
        </div>
    )
}

export default DetailPage;
