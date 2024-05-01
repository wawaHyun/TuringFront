import { PG } from "@/redux/common/enums/PG";
import Link from "next/link";

interface ILinkButton{
    id:number,
    title:string,
    path:string
}

export default function LinkButton({id,title,path}:ILinkButton){
    return (
    <Link href={`${path}`} 
    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent
     md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700
      dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">
        {title}</Link>
    )
}

export const linkButtonTitles = [
    {id:3, title:'카운터', path:`${PG.DEMO}/counter`},
    {id:4, title:'게시판목록', path:`${PG.BOARD}/list`},
    {id:5, title:'게시글목록', path:`${PG.ARTICLE}/list`},
    {id:6, title:'마이페이지', path:`${PG.USER}/detail/${"토큰값으로 사용자id넣기(long타입)"}`}
]
