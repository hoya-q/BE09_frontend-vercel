"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { ChevronLeft, EllipsisVertical, X } from "lucide-react";
import { useSidebar } from "@/hooks/useSidebar";

export default function Sidebar({
  sidebarKey, // 사이드바를 구분하는 고유 키
  title, // 사이드바 헤더에 표시될 제목
  trigger, // 사이드바를 열기 위한 트리거 요소 (버튼 등)
  children, // 사이드바 내부에 표시될 내용
  className = "pb-5 flex flex-col", // 사이드바 컨테이너의 CSS 클래스
  titleClassName = "text-center", // 제목의 CSS 클래스
  titleStyle = {}, // 제목의 인라인 스타일
  titleProps = {}, // 제목 요소에 전달할 추가 props
  footer, // 사이드바 하단에 표시될 푸터 요소
  onBack = false, // 뒤로가기 버튼 표시 여부
  onClose = false, // 닫기 버튼 표시 여부
  add = false, // 더보기 버튼(점 3개 아이콘) 표시 여부
  onAdd, // 더보기 버튼 클릭 시 실행할 함수
  onTitleClick, // 제목 클릭 시 실행할 함수
  titleClickable = false, // 제목을 클릭 가능하게 할지 여부
}) {
  const { isOpen, open, close, closeAll } = useSidebar(sidebarKey);

  return (
    <>
      <div onClick={open}>{trigger}</div>

      <Sheet
        open={isOpen}
        onOpenChange={(val) => {
          if (val) {
            // 중첩 사이드바를 지원하기 위해 closeAll 대신 현재 사이드바만 열기
            open();
          } else {
            close();
          }
        }}
      >
        <SheetContent side="right" className={`${className} max-w-[600px]`}>
          <SheetHeader className="pt-4 border-b">
            <div className="flex items-center justify-between relative">
              {onBack ? (
                <button onClick={close} className="p-1 hover:bg-gray-100 rounded-full" aria-label="뒤로가기">
                  <ChevronLeft />
                </button>
              ) : (
                <div className="w-6 h-6" />
              )}
              <SheetTitle
                className={`${titleClassName} ${
                  titleClickable ? "cursor-pointer hover:text-blue-600 transition-colors" : ""
                }`}
                style={titleStyle}
                {...titleProps}
                onClick={titleClickable && onTitleClick ? onTitleClick : undefined}
              >
                {title}
              </SheetTitle>
              <div className="flex items-center gap-2">
                {add && onAdd && (
                  <button onClick={onAdd} className="cursor-pointer">
                    <EllipsisVertical />
                  </button>
                )}
                {onClose ? (
                  <SheetClose className="pr-5 hover:bg-gray-100 rounded-full" aria-label="닫기">
                    <X className="w-6 h-6" />
                  </SheetClose>
                ) : (
                  <div className="w-6 h-6" />
                )}
              </div>
            </div>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto px-5">{children}</div>

          {footer && <div className="border-t p-4 mt-4">{footer}</div>}
        </SheetContent>
      </Sheet>
    </>
  );
}
