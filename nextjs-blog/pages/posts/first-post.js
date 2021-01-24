/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-01-24 20:59:11
 * @LastEditTime: 2021-01-24 21:20:21
 * @FilePath: \nextjs-blog\pages\posts\first-post.js
 */

import Link from 'next/link'
 
export default function FirstPost(){
    return (
        <>
            <h1>FirstPost</h1>
            <h2>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </h2>
        </>
    )
}

