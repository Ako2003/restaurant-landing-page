import Image from "next/image";
import React from "react";

export default function Page(){
    return(
        <section>
            <div className="flex gap-x-10">
                <div className="w-full sticky top-0 h-fit">
                    <Image src={"/images/c837a6_bd6341f1c5f94affbb2303e53d86de0c~mv2.avif"} alt={"Glasses"}
                           width={647} height={1150} className="w-full h-auto object-cover"/>
                </div>
                <div className="w-full pb-20">
                    <div className="container w-full">
                        <h2 className="uppercase">Menu</h2>

                        {/* Food */}
                        <div className="mt-10">
                            <h3 className="uppercase">Food</h3>
                            <p>These dishes are lingering over.</p>
                        </div>
                        <hr className="border-t border-[#adacaa] my-4"/>
                        <div className="flex justify-between">
                            <div className="max-w-[450px]">
                                <h5 className="uppercase">Onion Soup</h5>
                                <p className="mt-3">A classic, rich onion soup with melted Gruyere cheese</p>
                            </div>
                            <div>
                                <p>12,00 €</p>
                            </div>
                        </div>
                        <hr className="border-t border-[#adacaa] my-4"/>
                        <div className="flex justify-between">
                            <div className="max-w-[450px]">
                                <h5 className="uppercase">Steak Tartare</h5>
                                <p className="mt-3">Finely chopped raw steak with capers, onions and a quail egg
                                    yolk</p>
                            </div>
                            <div>
                                <p>18,00 €</p>
                            </div>
                        </div>
                        <hr className="border-t border-[#adacaa] my-4"/>
                        <div className="flex justify-between">
                            <div className="max-w-[450px]">
                                <h5 className="uppercase">Pan-Seared Scallops</h5>
                                <p className="mt-3">Scallops served with a delicated lemon beurre blanc sauce</p>
                            </div>
                            <div>
                                <p>22,00 €</p>
                            </div>
                        </div>
                        <hr className="border-t border-[#adacaa] my-4"/>
                        <div className="flex justify-between">
                            <div className="max-w-[450px]">
                                <h5 className="uppercase">Beef Wellington</h5>
                                <p className="mt-3">A tender filet mignon encased in puff pastry with mushroom
                                    duxelles</p>
                            </div>
                            <div>
                                <p>30,00 €</p>
                            </div>
                        </div>
                        <hr className="border-t border-[#adacaa] my-4"/>
                        <div className="flex justify-between">
                            <div className="max-w-[450px]">
                                <h5 className="uppercase">Salmon Roulade</h5>
                                <p className="mt-3">Rolled salmon filet with a creamy dill sauce and asparagus</p>
                            </div>
                            <div>
                                <p>26,00 €</p>
                            </div>
                        </div>
                        <hr className="border-t border-[#adacaa] my-4"/>
                        <div className="flex justify-between">
                            <div className="max-w-[450px]">
                                <h5 className="uppercase">Duck Confit</h5>
                                <p className="mt-3">Slow-cooked duck leg served with a cherry reduction</p>
                            </div>
                            <div>
                                <p>28,00 €</p>
                            </div>
                        </div>
                        <hr className="border-t border-[#adacaa] my-4"/>
                        <div className="flex justify-between">
                            <div className="max-w-[450px]">
                                <h5 className="uppercase">Truffle Risotto</h5>
                                <p className="mt-3">Creamy risotto with black truffle and Parmesan</p>
                            </div>
                            <div>
                                <p>24,00 €</p>
                            </div>
                        </div>
                        <hr className="border-t border-[#adacaa] my-4"/>
                        <div className="flex justify-between">
                            <div className="max-w-[450px]">
                                <h5 className="uppercase">Cheese Plate</h5>
                                <p className="mt-3">An assortement of fine cheeses with figs and a toasted baguette</p>
                            </div>
                            <div>
                                <p>16,00 €</p>
                            </div>
                        </div>

                        {/* Dessert */}
                        <div className="mt-10">
                            <h3 className="uppercase">Dessert</h3>
                            <p>Our desserts are made in-house by our expert pastry chef</p>
                        </div>
                        <hr className="border-t border-[#adacaa] my-4"/>
                        <div className="flex justify-between">
                            <div className="max-w-[450px]">
                                <h5 className="uppercase">Crème Brûlée</h5>
                                <p className="mt-3">A freshly baked brownie loaded with dark chocolate chips and
                                    walnuts</p>
                            </div>
                            <div>
                                <p>10,00 €</p>
                            </div>
                        </div>
                        <hr className="border-t border-[#adacaa] my-4"/>
                        <div className="flex justify-between">
                            <div className="max-w-[450px]">
                                <h5 className="uppercase">Tiramisu</h5>
                                <p className="mt-3">A traditional Italian dessert with layers of coffee-soaked
                                    ladyfingers and mascarpone</p>
                            </div>
                            <div>
                                <p>12,00 €</p>
                            </div>
                        </div>

                        {/* Cocktails */}
                        <div className="mt-10">
                            <h3 className="uppercase">Cocktails</h3>
                        </div>
                        <hr className="border-t border-[#adacaa] my-4"/>
                        <div className="flex justify-between">
                            <div className="max-w-[450px]">
                                <h5 className="uppercase">Martini</h5>
                                <p className="mt-3">Gin or vodka, dry vermouth, choice of garnish</p>
                            </div>
                            <div>
                                <p>14,00 €</p>
                            </div>
                        </div>
                        <hr className="border-t border-[#adacaa] my-4"/>
                        <div className="flex justify-between">
                            <div className="max-w-[450px]">
                                <h5 className="uppercase">Manhattan</h5>
                                <p className="mt-3">Bourbon or rye, sweet vermouth, bitters, cherry garnish</p>
                            </div>
                            <div>
                                <p>15,00 €</p>
                            </div>
                        </div>
                        <hr className="border-t border-[#adacaa] my-4"/>
                        <div className="flex justify-between">
                            <div className="max-w-[450px]">
                                <h5 className="uppercase">Negroni</h5>
                                <p className="mt-3">Gin, Campari, sweet vermouth, orange twist</p>
                            </div>
                            <div>
                                <p>14,00 €</p>
                            </div>
                        </div>
                        <hr className="border-t border-[#adacaa] my-4"/>
                        <div className="flex justify-between">
                            <div className="max-w-[450px]">
                                <h5 className="uppercase">Whiskey Sour</h5>
                                <p className="mt-3">Bourbon, lemon juice, simple syrup, cherry and orange slice</p>
                            </div>
                            <div>
                                <p>13,00 €</p>
                            </div>
                        </div>
                        <hr className="border-t border-[#adacaa] my-4"/>
                        <div className="flex justify-between">
                            <div className="max-w-[450px]">
                                <h5 className="uppercase">Gimlet</h5>
                                <p className="mt-3">Gin or vodka, lime juice, simple syrup</p>
                            </div>
                            <div>
                                <p>13,00 €</p>
                            </div>
                        </div>

                        {/* Wines */}
                        <div className="mt-10">
                            <h3 className="uppercase">Wines</h3>
                        </div>
                        <hr className="border-t border-[#adacaa] my-4"/>
                        <div>
                            <div className="max-w-[450px]">
                                <h5 className="uppercase">Chardonnay</h5>
                                <p className="my-2">Private Winery</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Glass</p>
                                <p>12,00 €</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Bottle</p>
                                <p>48,00 €</p>
                            </div>
                        </div>
                        <hr className="border-t border-[#adacaa] my-4"/>
                        <div>
                            <div className="max-w-[450px]">
                                <h5 className="uppercase">Sauvignon Blanc</h5>
                                <p className="my-2">Private Winery</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Glass</p>
                                <p>14,00 €</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Bottle</p>
                                <p>56,00 €</p>
                            </div>
                        </div>
                        <hr className="border-t border-[#adacaa] my-4"/>
                        <div>
                            <div className="max-w-[450px]">
                                <h5 className="uppercase">Pinot Noir</h5>
                                <p className="my-2">Private Winery</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Glass</p>
                                <p>14,00 €</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Bottle</p>
                                <p>56,00 €</p>
                            </div>
                        </div>
                        <hr className="border-t border-[#adacaa] my-4"/>
                        <div>
                            <div className="max-w-[450px]">
                                <h5 className="uppercase">Cabernet Sauvignon</h5>
                                <p className="my-2">Private Winery</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Glass</p>
                                <p>13,00 €</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Bottle</p>
                                <p>52,00 €</p>
                            </div>
                        </div>
                        <hr className="border-t border-[#adacaa] my-4"/>
                        <div>
                            <div className="max-w-[450px]">
                                <h5 className="uppercase">Merlot</h5>
                                <p className="my-2">Private Winery</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Glass</p>
                                <p>13,00 €</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Bottle</p>
                                <p>52,00 €</p>
                            </div>
                        </div>
                        <hr className="border-t border-[#adacaa] my-4"/>
                        <div>
                            <div className="max-w-[450px]">
                                <h5 className="uppercase">Syrah/Shiraz</h5>
                                <p className="my-2">Private Winery</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Glass</p>
                                <p>14,00 €</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Bottle</p>
                                <p>56,00 €</p>
                            </div>
                        </div>
                        <hr className="border-t border-[#adacaa] my-4"/>
                        <div>
                            <div className="max-w-[450px]">
                                <h5 className="uppercase">Champagne</h5>
                                <p className="my-2">Private Winery</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Glass</p>
                                <p>18,00 €</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Bottle</p>
                                <p>72,00 €</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}