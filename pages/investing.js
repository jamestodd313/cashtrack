import Head from "next/head";
import { Navbar } from "../components/navigation/Navbar";

export default function investing({data}){
    return(
        <>
            <Head>
                <title>CashTrack - Investing</title>
            </Head>
            <main>
                { !data ? "No investing data found." : (
                    "stuff goes here"
                )}
            </main>
            <Navbar active="investing"/>
        </>
    )
}