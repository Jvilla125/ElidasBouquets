import React from "react";

const ProductDetailsPageComponent = () => {
    return (
        <>
            <div className="grid grid-cols-3 grid-rows-7 gap-4 p-8 sm:grid-auto-row sm:grid-auto-col">
                <div className="bg-blue-400">
                    <h1>Bouquet #1</h1>
                </div>
                <div className="row-span-2 col-start-2 row-start-2 bg-blue-400">
                    <h1>1. Choose your size</h1>
                    <h3 class="mb-5 text-lg font-medium text-gray-900 dark:text-white">How much do you expect to use each month?</h3>
                    <ul class="grid gap-2 md:grid-cols-3">
                        <li>
                            <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required/>
                                <label for="hosting-small" class="inline-flex items-center justify-between p-8 ml-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <div class="w-full text-lg font-semibold">Small</div>
                                        <div class="w-full">$24.99</div>
                                    </div>
                                </label>
                        </li>
                        <li>
                            <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer"/>
                                <label for="hosting-big" class="inline-flex items-center justify-between p-8 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <div class="w-full text-lg font-semibold">Medium</div>
                                        <div class="w-full">$49.99</div>
                                    </div>
                                </label>
                        </li>
                         <li>
                            <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer"/>
                                <label for="hosting-big" class="inline-flex items-center justify-between p-8 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <div class="w-full text-lg font-semibold">Large</div>
                                        <div class="w-full">$74.99</div>
                                    </div>
                                </label>
                        </li>
                    </ul>
                </div>
                <div className="row-span-4 col-start-1 row-start-2 bg-blue-400">
                    <img className=" rounded-xl" src="/images/BouquetOne.jpg" alt="product image" />
                </div>
                <div className="col-start-1 row-start-6 bg-blue-400 flex flex-row justify-around sm:justify-self-auto">
                    <img className="object-contain md:object-scale-down sm:w-8 sm:h-8 lg:w-28 lg:h-32" src="/images/BouquetOne.jpg" alt="product image" />
                    <img className="object-contain md:object-scale-down sm:w-8 sm:h-8 lg:w-28 lg:h-32" src="/images/BouquetOne.jpg" alt="product image" />
                </div>
                <div className="row-span-2 col-start-2 row-start-4 bg-blue-400">11</div>
                <div className="col-start-1 row-start-7 bg-blue-400">12</div>
                <div className="row-span-2 col-start-3 row-start-2 bg-blue-400">13</div>
                <div className="row-span-2 col-start-3 row-start-4 bg-blue-400">14</div>
            </div>
        </>
    )
}

export default ProductDetailsPageComponent;