"use client";import React from 'react';
import {useState} from 'react';
export function useTabState() {
    const [activeTab, setActiveTab] = useState('Descripción');
  
    return { activeTab, setActiveTab };
  }
  
  