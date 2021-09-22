import React, { Suspense, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from '@react-three/drei'
import { Link } from "react-router-dom";
import SwordShield from "./Models/SwordShield.js"
import { mintNFT, mintGod, mintAvatar } from './utils/interact.js'

export default function Hero() {

  const [airPool, setAirPool] = useState(19.1);
  const [firePool, setFirePool] = useState(23.5);
  const [earthPool, setEarthPool] = useState(42.3);
  const [waterPool, setWaterPool] = useState(10.5);
  const [avatarPool, setAvatarPool] = useState(125.9);

  return (
    <div className="">
      <main className="lg:relative py-24 max-w-6xl 3xl:max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2">
          <div className="sm:pt-24 mx-auto">
            <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
              <h1 className="text-4xl tracking-tight font-extrabold text-gold-light sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">ELEMENTALS.GAME</span>{' '}
              </h1>
              <p className="mt-3 max-w-md mx-auto text-lg text-white sm:text-xl md:mt-5 md:max-w-3xl">
                Collect. Create. Earn.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button
                    onClick={() => mintNFT(1)}
                    className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white border-2 bg-gray-dark bg-opacity-75 border-gold-dark md:py-4 md:text-lg md:px-10"
                  >
                    Mint Elemental
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="py-20 h-122 sm:pt-0">
            <Canvas pixelRatio={[1, 2]} camera={{ position: [5.7, 0, -0], fov: 10 }}> 
                <Suspense fallback={null} >
                <ambientLight intensity={0.1} />
                <directionalLight intensity={0.5} position={[3, 2, 2]}/>
                    <SwordShield
                    hasCape={true}
                    clothingColor={"#101011"}
                    armorColor={"#6A757C"}
                    weaponColor={"#9C9BDF"}
                    position={[0, -0.43, -0.41]}
                    /> 
                <OrbitControls autoRotate={false} autoRotateSpeed={0.5} enableZoom={false} enablePan={false} enableRotate={false}/>
                <Environment preset="night" />
                </Suspense>
            </Canvas>  
          </div>
        </div>
        <div className="py-20">
          <div>
          </div>
          <div className="grid sm:grid-cols-4">
            <div>
              <p className="text-center text-4xl font-extrabold text-gray-300 sm:text-5xl sm:tracking-tight lg:text-6xl">
                  Air
              </p>
              <div className="h-80 my-10">
                  <Canvas pixelRatio={[1, 2]} camera={{ position: [5.7, 0, -0], fov: 10 }}> 
                      <Suspense fallback={null} >
                      <ambientLight intensity={0.1} />
                      <directionalLight intensity={0.5} position={[3, 2, 2]}/>
                          <SwordShield
                          hasCape={true}
                          clothingColor={"#101011"}
                          armorColor={"#6A757C"}
                          weaponColor={"#9C9BDF"}
                          position={[0, -0.43, 0]}
                          /> 
                      <OrbitControls autoRotate={true} autoRotateSpeed={0.5} enableZoom={false} enablePan={false} enableRotate={false}/>
                      <Environment preset="night" />
                      </Suspense>
                  </Canvas>  
              </div>  
              <p className="text-center text-xl text-green-bright sm:text-5xl sm:tracking-tight lg:text-2xl pb-20 sm:pb-0">
                  {airPool} ETH
              </p> 
              <div className="w-full text-center">
                <button
                  onClick={() => mintGod(4500)}
                  className="my-2 inline-flex items-center px-2.5 py-1.5 border-transparent text-xs font-medium rounded shadow-sm text-white border-2 border-gray-300"
                >
                  Mint Air God
                </button>
              </div>
            </div>
            <div>
              <p className="text-center text-4xl font-extrabold text-red-fire sm:text-5xl sm:tracking-tight lg:text-6xl">
                  Fire
              </p>
              <div className="h-80 my-10">
                  <Canvas pixelRatio={[1, 2]} camera={{ position: [5.7, 0, -0], fov: 10 }}> 
                      <Suspense fallback={null} >
                      <ambientLight intensity={0.1} />
                      <directionalLight intensity={0.5} position={[3, 2, 2]}/>
                          <SwordShield
                          hasCape={true}
                          clothingColor={"#101011"}
                          armorColor={"#6A757C"}
                          weaponColor={"#9C9BDF"}
                          position={[0, -0.43, 0]}
                          /> 
                      <OrbitControls autoRotate={true} autoRotateSpeed={0.5} enableZoom={false} enablePan={false} enableRotate={false}/>
                      <Environment preset="night" />
                      </Suspense>
                  </Canvas>  
              </div>  
              <p className="text-center text-xl text-green-bright sm:text-5xl sm:tracking-tight lg:text-2xl pb-20 sm:pb-0">
                  {firePool} ETH
              </p> 
              <div className="w-full text-center">
                <button
                  onClick={() => mintGod(1500)}
                  className="my-2 inline-flex items-center px-2.5 py-1.5 border-transparent text-xs font-medium rounded shadow-sm text-white border-2 border-red-fire"
                >
                  Mint Fire God
                </button>
              </div>
            </div>
            <div>
              <p className="text-center text-4xl font-extrabold text-brown-lighter sm:text-5xl sm:tracking-tight lg:text-6xl">
                  Earth
              </p>
              <div className="h-80 my-10">
                  <Canvas pixelRatio={[1, 2]} camera={{ position: [5.7, 0, -0], fov: 10 }}> 
                      <Suspense fallback={null} >
                      <ambientLight intensity={0.1} />
                      <directionalLight intensity={0.5} position={[3, 2, 2]}/>
                          <SwordShield
                          hasCape={true}
                          clothingColor={"#101011"}
                          armorColor={"#6A757C"}
                          weaponColor={"#9C9BDF"}
                          position={[0, -0.43, 0]}
                          /> 
                      <OrbitControls autoRotate={true} autoRotateSpeed={0.5} enableZoom={false} enablePan={false} enableRotate={false}/>
                      <Environment preset="night" />
                      </Suspense>
                  </Canvas>  
              </div>   
              <p className="text-center text-xl text-green-bright sm:text-5xl sm:tracking-tight lg:text-2xl pb-20 sm:pb-0">
                  {earthPool} ETH
              </p>
              <div className="w-full text-center">
                <button
                  onClick={() => mintGod(3000)}
                  className="my-2 inline-flex items-center px-2.5 py-1.5 border-transparent text-xs font-medium rounded shadow-sm text-white border-2 border-brown-lighter"
                >
                  Mint Earth God
                </button>
              </div>
            </div>
            <div>
              <p className="text-center text-4xl font-extrabold text-blue-600 sm:text-5xl sm:tracking-tight lg:text-6xl">
                  Water
              </p>
              <div className="h-80 my-10">
                  <Canvas pixelRatio={[1, 2]} camera={{ position: [5.7, 0, -0], fov: 10 }}> 
                      <Suspense fallback={null} >
                      <ambientLight intensity={0.1} />
                      <directionalLight intensity={0.5} position={[3, 2, 2]}/>
                          <SwordShield
                          hasCape={true}
                          clothingColor={"#101011"}
                          armorColor={"#6A757C"}
                          weaponColor={"#9C9BDF"}
                          position={[0, -0.43, 0]}
                          /> 
                      <OrbitControls autoRotate={true} autoRotateSpeed={0.5} enableZoom={false} enablePan={false} enableRotate={false}/>
                      <Environment preset="night" />
                      </Suspense>
                  </Canvas>  
              </div>   
              <p className="text-center text-xl text-green-bright sm:text-5xl sm:tracking-tight lg:text-2xl pb-20 sm:pb-0">
                  {waterPool} ETH
              </p>
              <div className="w-full text-center">
                <button
                  onClick={() => mintGod(0)}
                  className="my-2 inline-flex items-center px-2.5 py-1.5 border-transparent text-xs font-medium rounded shadow-sm text-white border-2 border-blue-600"
                >
                  Mint Water God
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-20 pt-10">
          <div className="">
            <div>
              <div className="h-144 my-10">
                  <Canvas pixelRatio={[1, 2]} camera={{ position: [5.7, 0, -0], fov: 10 }}> 
                      <Suspense fallback={null} >
                      <ambientLight intensity={0.1} />
                      <directionalLight intensity={0.5} position={[3, 2, 2]}/>
                          <SwordShield
                          hasCape={true}
                          clothingColor={"#101011"}
                          armorColor={"#6A757C"}
                          weaponColor={"#9C9BDF"}
                          position={[0, -0.43, 0]}
                          /> 
                      <OrbitControls autoRotate={true} autoRotateSpeed={0.5} enableZoom={false} enablePan={false} enableRotate={false}/>
                      <Environment preset="night" />
                      </Suspense>
                  </Canvas>  
              </div>  
              <p className="text-center text-xl text-green-bright sm:text-5xl sm:tracking-tight lg:text-2xl pb-20 sm:pb-0">
                  {avatarPool} ETH
              </p> 
              <div className="w-full text-center">
                <button
                  onClick={() => mintAvatar()}
                  className="my-2 inline-flex items-center px-2.5 py-1.5 border-transparent text-xs font-medium rounded shadow-sm text-white border-2 border-gold-light"
                >
                  Mint Avatar
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}