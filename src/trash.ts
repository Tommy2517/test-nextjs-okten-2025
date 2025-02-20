// import {NextResponse} from "next/server";
//
// const response = NextResponse.json({ user: data });
//записываем в куки ответа токен (живет пока жив запрос)
// response.cookies.set({
//     name: "token",
//     value: data.accessToken+999, // У dummyjson `data.token`, но у тебя `data.accessToken`
//     // httpOnly: true,
//     // secure: process.env.NODE_ENV === "production",
//     path: "/",
//     maxAge: 60*60, // 1 день
// });
// console.log(`{response.headers.get("Set-Cookie")}`);


//получаем все куки из хедера
// const headerss = res.headers.get('Set-Cookie')
// console.log(`headers utuls ---${headerss}`)

//получаем тело ответа
// const liginres = await res.json()
// console.log(`login res --- ${JSON.stringify(liginres)}`)



////////////////////////////////////////////////////////////////////////////



// const isAllDefaultCookiesAvailable = await isDefaultCookiesExisted()
//
// if (!isAllDefaultCookiesAvailable) {
//     await setDefaultCookies({req: request, res: response})
// }
// export const setDefaultCookies = async ({req, res}: { req: NextRequest, res: NextResponse }) => {
//     await setCookie('test', true, {cookies, res, req})
//     await setCookie('test2', true, {cookies, res, req})
//     await setCookie('test3', true, {cookies, res, req})
//     await setCookie('test4', true, {cookies, res, req})
//     console.log(res,'zzzzzzzzzzzzzzzzzzzzz')
// }

// import {getCookies} from "cookies-next";
// import {cookies} from "next/headers";
//
// export const isDefaultCookiesExisted = async () => {
//     const allCookies = await getCookies({cookies})
//
//     const existedCookies = Object.keys(typeof allCookies === "object" ? allCookies : {})
//
//     return !defaultCookiesKeys.map(item => {
//         if (!existedCookies.includes(item)) {
//             return false
//         }
//     }).includes(false)

// const defaultCookiesKeys = ['test', 'test2', 'test3', 'test4']


