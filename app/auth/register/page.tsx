// @flow
import * as React from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import _FormRegister from "@/app/auth/register/_FormRegister";

type Props = {

};
export default function Page(props: Props) {
    return (
        <div className="w-full min-h-screen bg-[#FFE6A2] flex justify-center relative">
            <div className="relative z-10 mt-[10vh]">
                <div className="flex justify-center">
                    <img src="/assets/images/web/logo.png" className="w-[150px] mb-5" alt="logo"/>
                </div>
                <div className="max-w-md">
                    <Card className="text-center">
                        <CardHeader>
                            <CardTitle>Daftar Sekarang</CardTitle>
                            <CardDescription>
                                Sudah punya akun Epic Goods?
                                <Link className="auth-link" href={"/auth/login"}>Masuk</Link>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <_FormRegister/>
                            <CardDescription className="mt-3">
                                Dengan mendaftar, saya menyetujui{" "}
                                <Link className="auth-link" href={"/notice/terms"}>Syarat & Ketentuan</Link>
                                {" "}yang berlaku.
                            </CardDescription>
                        </CardContent>

                    </Card>
                </div>
            </div>
            <img className="absolute z-0 bottom-0 h-[100vh] right-[7vw]" src="/assets/images/web/register_img.png"
                 alt=""/>
        </div>
    );
};