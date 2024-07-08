"use client";
import React from 'react'
import { useState, useEffect } from 'react';
import PookiefyAuthorize from '@/components/PookiefyAuthorize';
import PookiefyNowPlaying from '@/components/PookiefyNowPlaying';
import PookiefyLoading from "@/components/PookiefyLoading";

const PageHandler = ({ tokens }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (tokens.access_token && tokens.refresh_token) {
      localStorage.setItem('access_token', tokens.access_token);
      localStorage.setItem('refresh_token', tokens.refresh_token);
    }

    const access_token = localStorage.getItem('access_token');
    const refresh_token = localStorage.getItem('refresh_token');

    if (access_token && refresh_token) {
      setIsAuthorized(true);
    }
    setLoading(false);
  }, [])

  return loading ? <PookiefyLoading /> : (isAuthorized ? <PookiefyNowPlaying /> : <PookiefyAuthorize />);
}

export default PageHandler