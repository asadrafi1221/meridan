import React from 'react';
import { motion } from 'framer-motion';

// Basic Cube - Optimized (Removed backdrop-filter for performance)
export const Cube = ({ size = 60, x = 0, y = 0, z = 0, rotateSpeed = 5, color = "rgba(37,99,235,0.2)" }) => (
  <motion.div
    style={{ 
        width: size, 
        height: size, 
        x, y, z,
    }}
    animate={{ rotateX: 360, rotateY: 360 }}
    transition={{ duration: rotateSpeed, repeat: Infinity, ease: "linear" }}
    className="absolute preserve-3d will-change-transform"
  >
     {/* Reduced opacity instead of blur for performance */}
     <div className="cube-face bg-white/5 border border-white/10" style={{ transform: `rotateY(0deg) translateZ(${size/2}px)`, borderColor: color }}></div>
     <div className="cube-face bg-white/5 border border-white/10" style={{ transform: `rotateY(90deg) translateZ(${size/2}px)`, borderColor: color }}></div>
     <div className="cube-face bg-white/5 border border-white/10" style={{ transform: `rotateY(180deg) translateZ(${size/2}px)`, borderColor: color }}></div>
     <div className="cube-face bg-white/5 border border-white/10" style={{ transform: `rotateY(-90deg) translateZ(${size/2}px)`, borderColor: color }}></div>
     <div className="cube-face bg-white/5 border border-white/10" style={{ transform: `rotateX(90deg) translateZ(${size/2}px)`, borderColor: color }}></div>
     <div className="cube-face bg-white/5 border border-white/10" style={{ transform: `rotateX(-90deg) translateZ(${size/2}px)`, borderColor: color }}></div>
  </motion.div>
);

// Floating Tech Stack - Simplified
export const TechStack = () => (
    <div className="relative preserve-3d w-40 h-60 animate-float will-change-transform">
        <Cube size={60} y={-60} rotateSpeed={12} color="rgba(37, 99, 235, 0.3)" />
        <Cube size={80} y={10} rotateSpeed={15} color="rgba(10, 10, 10, 0.2)" />
        <Cube size={60} y={80} rotateSpeed={18} color="rgba(37, 99, 235, 0.3)" />
    </div>
);

// Orbiting System - Optimized
export const OrbitSystem = () => (
    <div className="relative preserve-3d w-60 h-60 flex items-center justify-center will-change-transform">
        <Cube size={80} rotateSpeed={20} color="rgba(10, 10, 10, 0.8)" />
        <motion.div 
            animate={{ rotateZ: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 preserve-3d"
        >
             <Cube size={40} x={120} rotateSpeed={8} color="rgba(37, 99, 235, 0.5)" />
        </motion.div>
    </div>
);

// Growth Bar Chart - Optimized
export const GrowthChart3D = () => (
    <div className="relative preserve-3d flex items-end gap-4 h-60">
        {[1, 2, 3, 4].map((i) => (
            <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: i * 40 }}
                transition={{ duration: 1, delay: i * 0.2 }}
                className="w-16 bg-blue-500/20 border border-blue-500/50 relative preserve-3d"
            >
                 <div className="absolute top-0 w-full h-16 bg-blue-500/30 -translate-y-1/2 rotate-x-90 origin-bottom border border-blue-500/50"></div>
                 <div className="absolute top-0 right-0 w-16 h-full bg-blue-500/10 rotate-y-90 origin-right border border-blue-500/30"></div>
            </motion.div>
        ))}
    </div>
);

// Abstract Connector - Optimized
export const Connector3D = () => (
    <div className="relative preserve-3d w-full h-full will-change-transform">
         <motion.div 
            className="absolute top-1/2 left-1/2 w-[300px] h-[300px] border border-dashed border-gray-300 rounded-full -translate-x-1/2 -translate-y-1/2"
            animate={{ rotateX: 60, rotateZ: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
         />
         <motion.div 
            className="absolute top-1/2 left-1/2 w-[200px] h-[200px] border border-brand-accent rounded-full -translate-x-1/2 -translate-y-1/2"
            animate={{ rotateX: -60, rotateZ: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
         />
         <Cube size={60} rotateSpeed={10} color="#2563eb" />
    </div>
);