import React from 'react'
import Cookies from 'js-cookie'

// 쿠키(Cookies)
// : 웹사이트가 사용자의 컴퓨터에 저장하는 텍스트 파일
// : 사용자가 웹사이트에서 수행한 작업에 대한 정보를 담는 파일

// js-cookie 라이브러리 사용
// npm install js-cookie

// 쿠키를 설정하고 가져오는 방법
export function setCookie(key: string, value: string):void {
  Cookies.set(key,value)  
}

export function getCookies(key: string): string | undefined {
  return Cookies.get(key)
}