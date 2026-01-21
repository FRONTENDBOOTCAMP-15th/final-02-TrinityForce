"use client";

import { Modal } from "@/components/ui/Modal";
import { useState } from "react";

export default function TestPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* 모달 열기 버튼 */}
      <button 
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg"
      >
        비밀번호 변경 모달 열기
      </button>
      
      {/* 모달 */}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  )
}