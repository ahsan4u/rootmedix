import Link from 'next/link';
import data from '../../../public/data.json';

export async function generateStaticParams() {
    return [ {user: 'all'}, {user: 'sam'} ];
}

export default async function userPage({params}) {
    const {user} = await params;
    let newData;
    if(user != 'all') {
         newData = [data[2]];
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
                            <h1 key={idx+1} className='ml-3 text-3xl font-bold text-red-700'>{nData.name}</h1>
                            <li key={idx} className='ml-3'>{nData.content}</li>
                        </>
                    )
                })
            }
        </ol>
    )
}