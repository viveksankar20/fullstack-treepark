"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ShoppingCart, User, Sun, Moon, ChevronDown } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
   
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import Image from "next/image"
import { useTheme } from "@/app/theme-context"
import { DialogTitle } from "@radix-ui/react-dialog"

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { theme, toggleTheme } = useTheme()

    return (
        <nav className=" top-0 z-50 border-b border-grid  ">
            <div className="px-2">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex-shrink-0">
                        <Image src="/vivek.svg" alt="Logo" width={150} height={100} className="~w-28/36 ~h-16/22" priority />
                    </Link>

                    {/* Desktop Navigation (Large Screens Only) */}
                    <div className="hidden lg:flex">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Plants</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid w-[400px] gap-3 p-4">
                                            <Link href="/plants/indoor" className="block p-2 hover:bg-muted">
                                                Indoor Plants
                                            </Link>
                                            <Link href="/plants/outdoor" className="block p-2 hover:bg-muted">
                                                Outdoor Plants
                                            </Link>
                                            <Link href="/plants/succulents" className="block p-2 hover:bg-muted">
                                                Succulents
                                            </Link>
                                            <Link href="/plants/flowering" className="block p-2 hover:bg-muted">
                                                Flowering Plants
                                            </Link>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Seeds</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid w-[400px] gap-3 p-4">
                                            <Link href="/seeds/vegetable" className="block p-2 hover:bg-muted">
                                                Vegetable Seeds
                                            </Link>
                                            <Link href="/seeds/flower" className="block p-2 hover:bg-muted">
                                                Flower Seeds
                                            </Link>
                                            <Link href="/seeds/herb" className="block p-2 hover:bg-muted">
                                                Herb Seeds
                                            </Link>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Pots & Planters</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid w-[400px] gap-3 p-4">
                                            <Link href="/pots/ceramic" className="block p-2 hover:bg-muted">
                                                Ceramic Pots
                                            </Link>
                                            <Link href="/pots/plastic" className="block p-2 hover:bg-muted">
                                                Plastic Planters
                                            </Link>
                                            <Link href="/pots/hanging" className="block p-2 hover:bg-muted">
                                                Hanging Planters
                                            </Link>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Plant Care</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid w-[400px] gap-3 p-4">
                                            <Link href="/care/tools" className="block p-2 hover:bg-muted">
                                                Gardening Tools
                                            </Link>
                                            <Link href="/care/fertilizers" className="block p-2 hover:bg-muted">
                                                Fertilizers
                                            </Link>
                                            <Link href="/care/soil" className="block p-2 hover:bg-muted">
                                                Soil & Manure
                                            </Link>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                            
                               
                              
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* Desktop Actions (Large Screens Only) */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Input type="search" placeholder="Search products..." className="w-[200px]" />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost">
                                    <User />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Orders</DropdownMenuItem>
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Log out</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button variant="ghost">
                            <ShoppingCart />
                        </Button>
                        <Button variant="ghost" onClick={toggleTheme}>
                            {theme === "dark" ? <Sun /> : <Moon />}
                        </Button>
                    </div>

                    {/* Mobile & Tablet Navigation */}
                    <div className="flex items-center space-x-4 lg:hidden">
                        <Input
                            type="search"
                            placeholder="Search products..."
                            className="w-[140px] sm:w-[200px] md:w-[300px]"
                        />
                        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost">
                                    <Menu />
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="w-full sm:w-[400px] overflow-y-auto"
                            >
                                <DialogTitle className="sr-only">Mobile Navigation Menu</DialogTitle>
                                <div className="flex flex-col space-y-4">
                                    <Collapsible>
                                        <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
                                            <span className="text-base font-medium">Plants</span>
                                            <ChevronDown className="h-5 w-5" />
                                        </CollapsibleTrigger>
                                        <CollapsibleContent className="space-y-2 pl-4">
                                            <Link
                                                href="/plants/indoor"
                                                className="block py-2 text-base text-muted-foreground hover:text-primary"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                Indoor Plants
                                            </Link>
                                            <Link
                                                href="/plants/outdoor"
                                                className="block py-2 text-base text-muted-foreground hover:text-primary"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                Outdoor Plants
                                            </Link>
                                            <Link
                                                href="/plants/succulents"
                                                className="block py-2 text-base text-muted-foreground hover:text-primary"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                Succulents
                                            </Link>
                                            <Link
                                                href="/plants/flowering"
                                                className="block py-2 text-base text-muted-foreground hover:text-primary"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                Flowering Plants
                                            </Link>
                                        </CollapsibleContent>
                                    </Collapsible>

                                    <Collapsible>
                                        <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
                                            <span className="text-lg font-medium">Seeds</span>
                                            <ChevronDown className="h-5 w-5" />
                                        </CollapsibleTrigger>
                                        <CollapsibleContent className="space-y-2 pl-4">
                                            <Link
                                                href="/seeds/vegetable"
                                                className="block py-2 text-base text-muted-foreground hover:text-primary"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                Vegetable Seeds
                                            </Link>
                                            <Link
                                                href="/seeds/flower"
                                                className="block py-2 text-base text-muted-foreground hover:text-primary"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                Flower Seeds
                                            </Link>
                                            <Link
                                                href="/seeds/herb"
                                                className="block py-2 text-base text-muted-foreground hover:text-primary"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                Herb Seeds
                                            </Link>
                                        </CollapsibleContent>
                                    </Collapsible>

                                    <Collapsible>
                                        <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
                                            <span className="text-lg font-medium">Pots & Planters</span>
                                            <ChevronDown className="h-5 w-5" />
                                        </CollapsibleTrigger>
                                        <CollapsibleContent className="space-y-2 pl-4">
                                            <Link
                                                href="/pots/ceramic"
                                                className="block py-2 text-base text-muted-foreground hover:text-primary"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                Ceramic Pots
                                            </Link>
                                            <Link
                                                href="/pots/plastic"
                                                className="block py-2 text-base text-muted-foreground hover:text-primary"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                Plastic Planters
                                            </Link>
                                            <Link
                                                href="/pots/hanging"
                                                className="block py-2 text-base text-muted-foreground hover:text-primary"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                Hanging Planters
                                            </Link>
                                        </CollapsibleContent>
                                    </Collapsible>

                                    <Collapsible>
                                        <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
                                            <span className="text-lg font-medium">Plant Care</span>
                                            <ChevronDown className="h-5 w-5" />
                                        </CollapsibleTrigger>
                                        <CollapsibleContent className="space-y-2 pl-4">
                                            <Link
                                                href="/care/tools"
                                                className="block py-2 text-base text-muted-foreground hover:text-primary"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                Gardening Tools
                                            </Link>
                                            <Link
                                                href="/care/fertilizers"
                                                className="block py-2 text-base text-muted-foreground hover:text-primary"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                Fertilizers
                                            </Link>
                                            <Link
                                                href="/care/soil"
                                                className="block py-2 text-base text-muted-foreground hover:text-primary"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                Soil & Manure
                                            </Link>
                                        </CollapsibleContent>
                                    </Collapsible>

                                    <Collapsible>
                                        <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
                                            <span className="text-lg font-medium">Gifting</span>
                                            <ChevronDown className="h-5 w-5" />
                                        </CollapsibleTrigger>
                                        <CollapsibleContent className="space-y-2 pl-4">
                                            <Link
                                                href="/gifting/occasions"
                                                className="block py-2 text-base text-muted-foreground hover:text-primary"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                Gift by Occasion
                                            </Link>
                                            <Link
                                                href="/gifting/corporate"
                                                className="block py-2 text-base text-muted-foreground hover:text-primary"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                Corporate Gifting
                                            </Link>
                                            <Link
                                                href="/gifting/personalized"
                                                className="block py-2 text-base text-muted-foreground hover:text-primary"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                Personalized Gifts
                                            </Link>
                                        </CollapsibleContent>
                                    </Collapsible>

                                    <Link
                                        href="/blog"
                                        className="flex w-full items-center justify-between py-2"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <span className="text-lg font-medium">Blog</span>
                                    </Link>

                                    <Link
                                        href="/offers"
                                        className="flex w-full items-center justify-between py-2"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <span className="text-lg font-medium">Offers</span>
                                    </Link>

                                    <div className="pt-4 space-y-4">
                                        <Button variant="ghost" className="w-full justify-start text-base">
                                            <User className="mr-2 h-5 w-5" />
                                            My Account
                                        </Button>

                                        <Button variant="ghost" className="w-full justify-start text-base">
                                            <ShoppingCart className="mr-2 h-5 w-5" />
                                            Cart
                                        </Button>

                                        <Button variant="ghost" className="w-full justify-start text-base" onClick={toggleTheme}>
                                            {theme === "dark" ? (
                                                <>
                                                    <Sun className="mr-2 h-5 w-5" />
                                                    Light Mode
                                                </>
                                            ) : (
                                                <>
                                                    <Moon className="mr-2 h-5 w-5" />
                                                    Dark Mode
                                                </>
                                            )}
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
