import { NextResponse } from 'next/server'
import React from 'react'

export const GET = () => {
  return (
    NextResponse.json({ message: 'Hello from GET API route', status: 'success' })
  )
}
