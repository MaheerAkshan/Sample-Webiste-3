import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sparkles, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

interface ToothModelProps {
  viewMode: 'crown' | 'implant' | 'exploded' | 'xray';
  autoRotate: boolean;
  onSelectHotspot: (title: string, info: string) => void;
}

// Procedural 3D Tooth & Implant Geometry Component
function ToothGeometry({ viewMode, autoRotate, onSelectHotspot }: ToothModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const crownRef = useRef<THREE.Mesh>(null);
  const implantRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y += delta * 0.4;
    }
    
    // Animate exploded view positioning
    if (viewMode === 'exploded') {
      if (crownRef.current) crownRef.current.position.y = THREE.MathUtils.lerp(crownRef.current.position.y, 1.4, 0.1);
      if (coreRef.current) coreRef.current.position.y = THREE.MathUtils.lerp(coreRef.current.position.y, 0.4, 0.1);
      if (implantRef.current) implantRef.current.position.y = THREE.MathUtils.lerp(implantRef.current.position.y, -1.2, 0.1);
    } else {
      if (crownRef.current) crownRef.current.position.y = THREE.MathUtils.lerp(crownRef.current.position.y, 0.7, 0.1);
      if (coreRef.current) coreRef.current.position.y = THREE.MathUtils.lerp(coreRef.current.position.y, 0.0, 0.1);
      if (implantRef.current) implantRef.current.position.y = THREE.MathUtils.lerp(implantRef.current.position.y, -0.9, 0.1);
    }
  });

  const isXray = viewMode === 'xray';
  const showImplant = viewMode === 'implant' || viewMode === 'exploded' || viewMode === 'xray';

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* CROWN (Porcelain / Enamel Layer) */}
      <mesh
        ref={crownRef}
        position={[0, 0.7, 0]}
        onClick={(e) => {
          e.stopPropagation();
          onSelectHotspot("E.max Porcelain Crown", "Handcrafted Swiss ceramic with multi-layered translucency and micro-polished enamel luster.");
        }}
      >
        <cylinderGeometry args={[0.7, 0.55, 1.1, 32, 16]} />
        <meshPhysicalMaterial
          color={isXray ? "#00E5FF" : "#F8FAFC"}
          roughness={isXray ? 0.1 : 0.08}
          transmission={isXray ? 0.8 : 0.45}
          thickness={0.8}
          clearcoat={1.0}
          clearcoatRoughness={0.05}
          reflectivity={0.9}
          wireframe={isXray}
        />
      </mesh>

      {/* ABUTMENT / CORE CONNECTIVE PIN */}
      <mesh
        ref={coreRef}
        position={[0, 0, 0]}
        onClick={(e) => {
          e.stopPropagation();
          onSelectHotspot("Precision Zirconia Abutment", "Sub-millimeter connector connecting implant fixture to ceramic crown with hermetic seal.");
        }}
      >
        <cylinderGeometry args={[0.3, 0.35, 0.6, 24]} />
        <meshStandardMaterial
          color={isXray ? "#38BDF8" : "#E2E8F0"}
          metalness={0.7}
          roughness={0.2}
          wireframe={isXray}
        />
      </mesh>

      {/* TITANIUM IMPLANT POST (Root Replacement) */}
      {showImplant && (
        <mesh
          ref={implantRef}
          position={[0, -0.9, 0]}
          onClick={(e) => {
            e.stopPropagation();
            onSelectHotspot("Grade-5 Titanium Implant Root", "Threaded biocompatible titanium post designed for osseointegration with jawbone.");
          }}
        >
          <cylinderGeometry args={[0.35, 0.15, 1.4, 32]} />
          <meshStandardMaterial
            color={isXray ? "#00D2B5" : "#94A3B8"}
            metalness={0.95}
            roughness={0.15}
            wireframe={isXray}
          />
        </mesh>
      )}

      {/* ANATOMICAL HOTSPOT MARKERS */}
      <group position={[0.7, 1.0, 0]}>
        <mesh onClick={() => onSelectHotspot("Translucent Enamel Edge", "Formulated to match natural light refraction.")}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color="#00E5FF" />
        </mesh>
      </group>

      <group position={[-0.6, -0.8, 0]}>
        <mesh onClick={() => onSelectHotspot("Micro-Threaded Collar", "Reduces crestal bone stress and ensures lifetime stability.")}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color="#00D2B5" />
        </mesh>
      </group>
    </group>
  );
}

export default function ThreeToothCanvas() {
  const [viewMode, setViewMode] = useState<'crown' | 'implant' | 'exploded' | 'xray'>('crown');
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [activeInfo, setActiveInfo] = useState<{ title: string; desc: string } | null>({
    title: "AURA 3D Anatomical Explorer",
    desc: "Click any layer or marker on the 3D model to inspect biological components and surgical precision."
  });

  return (
    <div className="relative w-full h-[520px] lg:h-[620px] rounded-3xl glass-panel overflow-hidden border border-slate-700/50 shadow-2xl group">
      {/* 3D Canvas Container */}
      <Canvas className="w-full h-full cursor-grab active:cursor-grabbing">
        <PerspectiveCamera makeDefault position={[0, 0, 4.2]} fov={45} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 8, 5]} intensity={1.5} color="#FFFFFF" castShadow />
        <directionalLight position={[-5, -4, -5]} intensity={0.6} color="#00E5FF" />
        <pointLight position={[0, 2, 2]} intensity={1.2} color="#00D2B5" />

        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.4}>
          <ToothGeometry
            viewMode={viewMode}
            autoRotate={autoRotate}
            onSelectHotspot={(title, desc) => setActiveInfo({ title, desc })}
          />
        </Float>

        <Sparkles count={40} scale={6} size={2.5} speed={0.4} opacity={0.6} color="#00E5FF" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI - Math.PI / 4}
        />
      </Canvas>

      {/* Layer Control Bar */}
      <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 z-10 pointer-events-auto">
        <div className="flex items-center gap-1.5 p-1.5 glass-panel rounded-2xl border border-white/10 backdrop-blur-md">
          <button
            onClick={() => setViewMode('crown')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              viewMode === 'crown' ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-lg shadow-teal-500/25' : 'text-slate-300 hover:text-white'
            }`}
          >
            Crown
          </button>
          <button
            onClick={() => setViewMode('implant')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              viewMode === 'implant' ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-lg shadow-teal-500/25' : 'text-slate-300 hover:text-white'
            }`}
          >
            Implant
          </button>
          <button
            onClick={() => setViewMode('exploded')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              viewMode === 'exploded' ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-lg shadow-teal-500/25' : 'text-slate-300 hover:text-white'
            }`}
          >
            Exploded View
          </button>
          <button
            onClick={() => setViewMode('xray')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              viewMode === 'xray' ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-lg shadow-teal-500/25' : 'text-slate-300 hover:text-white'
            }`}
          >
            3D Laser X-Ray
          </button>
        </div>

        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className="px-3 py-1.5 glass-panel rounded-xl text-xs font-medium text-slate-300 hover:text-white border border-white/10"
        >
          {autoRotate ? "Pause Spin ⏸" : "Auto Spin 🔄"}
        </button>
      </div>

      {/* Active Hotspot Info Overlay Card */}
      {activeInfo && (
        <div className="absolute bottom-4 left-4 right-4 lg:left-6 lg:right-auto lg:max-w-md p-4 glass-panel rounded-2xl border border-teal-500/30 backdrop-blur-xl animate-fade-in shadow-2xl z-10">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-[10px] font-bold text-teal-400 uppercase tracking-widest mb-1">
                3D Interactive Inspection
              </span>
              <h4 className="text-sm font-bold text-white">{activeInfo.title}</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">{activeInfo.desc}</p>
            </div>
            <button
              onClick={() => setActiveInfo(null)}
              className="text-slate-400 hover:text-white text-xs p-1"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Bottom Right 3D Interaction Hint */}
      <div className="absolute bottom-4 right-4 hidden lg:flex items-center gap-2 text-[11px] text-slate-400 glass-panel px-3 py-1.5 rounded-full border border-white/5">
        <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
        <span>Drag to rotate 3D canvas • Click points to inspect</span>
      </div>
    </div>
  );
}
