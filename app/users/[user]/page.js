import Link from 'next/link';
import data from '../../../public/data.json';

export default async function userPage({params}) {
    const {user} = await params;
    let newData;
    if(user != 'all') {
         newData = [data[1]];
    } else {
        newData = data;
    }


    return (
        <ol>
            <Link href='/'><button>Click to go HomePage</button></Link>
            {
                newData.map((nData, idx)=> {
                    return (
                        <>
                            <h1 key={nData.id}>{nData.name}</h1>
                            <li key={idx}>{nData.content}</li>
                        </>
                    )
                })
            }
        </ol>
    )
}