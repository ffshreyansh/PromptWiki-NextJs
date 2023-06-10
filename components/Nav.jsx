"use client";

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { signIn, signOut, useSession, getProviders } from "next-auth/react"

const Nav = () => {

    const isUserLoggedin = true;
    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);
    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();
            setProviders(response)
        }
        setProviders()
    }, [])
    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link className="flex flex-center gap-2" href="/">
                <Image src="/assets/images/logo.svg" width={30} height={30} className="object-contain"></Image>
                <p className="logo_text">PromptWiki</p>
            </Link>


            {/* Desktop Nav */}
            <div className="sm:flex hidden">
                {isUserLoggedin ? (
                    <div className="flex gap-3 md:gap-5">
                        <Link href="/create-prompt">
                            <button className="black_btn">Create Post</button>
                        </Link>
                        <button type="button" className="outline_btn" onClick={signOut}>Sign Out</button>
                        <Link href="/profile">
                            <Image src="/assets/images/logo.svg" width={37} height={37} />
                        </Link>
                    </div>
                ) :
                    (
                        <>
                            {providers && Object.values(providers).map((provider) => (
                                <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="black_btn">
                                    Sign In
                                </button>
                            ))}
                        </>
                    )}
            </div>

            {/* Mobile Nav View */}
            <div className="sm:hidden flex relative">
                {isUserLoggedin ? (
                    <div className="flex">
                        <Image src="/assets/images/logo.svg"
                            width={37} height={37}
                            className="rounded-full"
                            onClick={() => setToggleDropdown((prev) => !prev)}
                        />


                        {
                            toggleDropdown && (
                                <div className="dropdown">
                                    <Link href="/profile"
                                        className="dropdown_link"
                                        onClick={() => setToggleDropdown(false)}> Profile</Link>
                                    <Link href="/create-prompt"
                                        className="dropdown_link"
                                        onClick={() => setToggleDropdown(false)}> Create Prompt</Link>
                                    <button
                                    type="button"
                                    className="black_btn w-full mt-5"
                                    onClick={()=>{
                                        setToggleDropdown(false);
                                        signOut();}
                                        }
                                    >Sign Out</button>
                                </div>
                            )
                        }
                    </div>
                ) : (
                    <>
                        {providers && Object.values(providers).map((provider) => (
                            <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="black_btn">
                                Sign In
                            </button>
                        ))}
                    </>
                )}
            </div>
        </nav>
    )
}

export default Nav