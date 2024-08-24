// @flow
import * as React from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import _FormLogin from "@/app/auth/login/_FormLogin";

export default function Page() {
    return (
        <>
            <div className="w-full min-h-screen bg-[#FFE6A2] flex justify-center relative">
                <div className="relative z-10 mt-[10vh]">
                    <div className="flex justify-center">
                        <img src="/assets/images/web/logo.png" className="w-[150px] mb-5" alt="logo"/>
                    </div>
                    <div className="max-w-md">
                        <Card className="text-center">
                            <CardHeader>
                                <CardTitle>Masuk</CardTitle>
                                <CardDescription className="w-full">
                                    Belum punya akun Epic Goods?
                                    <Link className="auth-link" href={"/auth/register"}>Daftar</Link>
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <_FormLogin/>
                            </CardContent>
                            <CardDescription className="w-[100vw]"></CardDescription>
                        </Card>
                    </div>
                </div>
                <img className="absolute z-0 bottom-0 h-[100vh] left-[7vw]" src="/assets/images/web/login_img.png"
                     alt=""/>
            </div>
        </>
    );
};