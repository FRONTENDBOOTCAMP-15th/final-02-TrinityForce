// components/ui/Modal.tsx

"use client";

import { useState } from "react";

export function Modal({ onClose }: { onClose: () => void }) {  // ← 추가!
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  return (
    <>
      {/* 배경 클릭하면 닫기 */}
      <div 
        className="fixed inset-0 bg-black/50 z-10"
        onClick={onClose}
      ></div>
      
      <div className="fixed inset-0 z-50 flex items-center justify-center p-8">
        <div 
          className="bg-[#F5EFE6] w-[clamp(320px,50vw,520px)] min-h-[450px] rounded-[20px] p-6 flex-shrink-0 relative"
          onClick={(e) => e.stopPropagation()}
        >
          
          {/* 뒤로가기 버튼 - 클릭하면 닫기 */}
          <button 
            className="absolute top-6 left-6"
            onClick={onClose}
          >
            <img 
              src="/icons/left_line.svg"
              alt="뒤로가기"
              className="w-6 h-6"
            />
          </button>
          
          <div className="pt-8">
            
            {/* 현재 비밀번호 */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-[#333333]">
                현재 비밀번호
              </label>
              <div className="relative">
                <input
                  type={showCurrentPassword ? "text" : "password"}
                  className="w-full px-4 py-3 border border-[#966E4F] rounded-lg bg-white"
                />
                <button 
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <img 
                    src={showCurrentPassword ? "/icons/Eye/show.svg" : "/icons/Eye/eye.svg"}
                    alt={showCurrentPassword ? "비밀번호 보기" : "비밀번호 숨기기"}
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </div>
            
            {/* 새 비밀번호 */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-[#333333]">
                새 비밀번호
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  placeholder="8자 이상, 영문+숫자"
                  className="w-full px-4 py-3 border border-[#966E4F] rounded-lg bg-white"
                />
                <button 
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <img 
                    src={showNewPassword ? "/icons/Eye/show.svg" : "/icons/Eye/eye.svg"}
                    alt={showNewPassword ? "비밀번호 보기" : "비밀번호 숨기기"}
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </div>
            
            {/* 새 비밀번호 확인 */}
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-[#333333]">
                새 비밀번호 확인
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="w-full px-4 py-3 border border-[#966E4F] rounded-lg bg-white"
                />
                <button 
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <img 
                    src={showConfirmPassword ? "/icons/Eye/show.svg" : "/icons/Eye/eye.svg"}
                    alt={showConfirmPassword ? "비밀번호 보기" : "비밀번호 숨기기"}
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </div>
            
            {/* 변경하기 버튼 */}
            <button 
              className="w-full bg-[#8B6F47] text-white py-3 rounded-lg font-semibold"
              onClick={onClose}
            >
              변경하기
            </button>
            
          </div>
          
        </div>
      </div>
    </>
  )
}