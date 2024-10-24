import Sidebar from '@/components/Sidebar'
import React from 'react'
Sidebar

export default function Akun() {

    return (
        <>
            <div className="flex">
                <div className="flex">
                    <div className="flex min-h-screen w-80 flex-col bg-primary py-4 text-gray-700">
                        <Sidebar/>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <header className="font-poppins shadow top-0 w-full z-10 h-16 bg-white">
                        <div className="bg-white relative flex align-items-center flex-row gap-5 overflow-hidden px-4 py-4 md:px-36 md:mx-auto md:flex-row md:items-center">
                            <div className="flex flex-row w-full lg:w-96">
                                <form className="w-full mx-auto">
                                    {/* <label for="default-search"
                          class="mb-2 text-sm font-medium text-gray-900 sr-only :text-white">Search
                      </label> */}
                                    <div className="relative">
                                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                            <i className="fa-solid fa-magnifying-glass" />
                                        </div>
                                        <input
                                            type="search"
                                            id="default-search"
                                            className="block w-full px-2 py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-primary"
                                            placeholder="Cari di HydraTiva"
                                            required=""
                                        />
                                        {/* <button type="submit"
                              class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 :bg-blue-600 :hover:bg-blue-700 :focus:ring-blue-800">Search</button> */}
                                    </div>
                                </form>
                            </div>
                            <div className="hidden lg:flex w-full justify-end items-center gap-3 h-full">
                                <div className="flex">
                                    {/* <button type="button" onclick="my_modal_1.showModal()"
                          class="focus:outline-none text-white hover:bg-[#FBF6F0] font-medium rounded-md text-sm w-12 aspect-square">
                          <i class="text-gray-600 fa-solid fa-bell fa-lg"></i>
                      </button> */}
                                    <a
                                        href="keranjang.html"
                                        className="flex justify-center items-center focus:outline-none text-white hover:bg-gray-200 font-medium rounded-md text-sm w-12 aspect-square"
                                    >
                                        <i className="text-gray-600 fa-solid fa-cart-shopping fa-lg" />
                                    </a>
                                </div>
                                <a
                                    href="akun_saya.html"
                                    className="flex items-center gap-2 hover:bg-gray-200 py-1 px-2 rounded-md"
                                >
                                    <img
                                        className="w-10 rounded-full"
                                        src="image/avatar-biru.jpg"
                                        alt=""
                                    />
                                    <p className="font-semibold text-nowrap">Mochamad Tegar Santoso</p>
                                </a>
                            </div>
                        </div>
                    </header>
                    <section
                        id="dashboard"
                        className="min-h-screen font-poppins w-full flex flex-col mt-4 pt-10 px-4 pb-20 bg-gray-100"
                    >
                        <div className="flex flex-col bg-white p-4 w-full rounded-lg">
                            <div className="font-semibold">Akun Saya</div>
                            <div>Kelola informasi profil Anda.</div>
                            <div className="divider" />
                            <form action="" className="flex w-full">
                                <div className="w-1/4 flex flex-col items-center gap-4">
                                    <img className="w-full" src="image/avatar-biru.jpg" alt="" />
                                    <input
                                        type="file"
                                        id="gambar"
                                        placeholder="gambar"
                                        className="w-full rounded-md bg-gray-100 file:mr-5 file:py-1 file:px-3 file:border-none file:w-full file:bg-gray-100 file:text-stone-700 hover:file:cursor-pointer hover:file:bg-green-50 hover:file:text-primary focus:outline-none focus:ring focus:ring-primary focus-border-primary"
                                    />
                                </div>
                                <div className="flex w-3/4 pl-8">
                                    <table className="w-full">
                                        <tbody>
                                            <tr>
                                                <td className="w-1/4 pr-4">
                                                    <label htmlFor="" className="block text-left">
                                                        Username
                                                    </label>
                                                </td>
                                                <td className="w-3/4 pl-4 py-1">
                                                    <input
                                                        className="w-full p-2 border-2 rounded-lg"
                                                        type="text"
                                                        defaultValue="tgrsnts"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="pr-4">
                                                    <label htmlFor="" className="block text-left">
                                                        Nama
                                                    </label>
                                                </td>
                                                <td className="pl-4 py-1">
                                                    <input
                                                        className="w-full p-2 border-2 rounded-lg"
                                                        type="text"
                                                        defaultValue="Mochamad Tegar Santoso"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="pr-4">
                                                    <label htmlFor="" className="block text-left">
                                                        Email
                                                    </label>
                                                </td>
                                                <td className="pl-4 py-1">
                                                    <input
                                                        className="w-full p-2 border-2 rounded-lg"
                                                        type="email"
                                                        defaultValue="tegarsantoso72@gmail.com"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="pr-4">
                                                    <label htmlFor="" className="block text-left">
                                                        Telepon
                                                    </label>
                                                </td>
                                                <td className="pl-4 py-1">
                                                    <input
                                                        className="w-full p-2 border-2 rounded-lg"
                                                        type="text"
                                                        defaultValue={"089670522489"}
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="pr-4">
                                                    <label htmlFor="" className="block text-left">
                                                        Jenis Kelamin
                                                    </label>
                                                </td>
                                                <td className="pl-4 py-1 flex gap-8">
                                                    <div className="flex items-center gap-1">
                                                        <input
                                                            className="accent-primary"
                                                            name="jenis_kelamin"
                                                            type="radio"
                                                            defaultValue="Laki-laki"
                                                            defaultChecked=""
                                                        />
                                                        <label htmlFor="">Laki-laki</label>
                                                    </div>
                                                    <div className="flex items-center  gap-1">
                                                        <input
                                                            className="accent-primary"
                                                            name="jenis_kelamin"
                                                            type="radio"
                                                            defaultValue="Perempuan"
                                                        />
                                                        <label htmlFor="">Perempuan</label>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="pr-4" />
                                                <td className="pl-4 pt-8">
                                                    <button
                                                        type="submit"
                                                        className="bg-primary hover:bg-[#237F20] text-white px-4 py-2 rounded-md"
                                                    >
                                                        Simpan
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>

        </>
    )
}
