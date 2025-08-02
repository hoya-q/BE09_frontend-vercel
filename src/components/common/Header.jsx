"use client";

import { Heart, Menu, MessageCircleMore, Search, ShoppingBag, User } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);

  const categoryData = {
    "출산/육아용품": [
      "모유수유용품",
      "분유수유용품",
      "튼살크림/스킨케어",
      "임부복/수유복/언더웨어",
      "물티슈/기저귀",
      "분유/이유식",
      "아기띠/기저귀 가방",
      "신생아/영유아의류",
      "유아로션/목욕용품",
      "유아건강/위생용품",
      "유아침구/이불",
      "유아가구/침대",
      "유아식기/커트러리",
      "유아안전용품",
      "유아외출용품",
      "유아목욕용품",
      "유아구강관리",
      "유아영양제",
      "유아체온계/의료용품",
      "유아소독/청소용품",
      "유아세제/세정제",
      "유아보관용품",
      "유아운동용품",
      "유아학습용품",
    ],
    유아동의류: [
      "유아용의류",
      "아동용의류",
      "내의/잠옷/속옷",
      "패딩/자켓",
      "한복/소품",
      "유아상의",
      "유아하의",
      "유아원피스",
      "유아정장",
      "유아운동복",
      "유아수영복",
      "유아언더웨어",
      "유아양말",
      "유아액세서리",
      "유아신발",
      "유아모자",
      "유아장갑",
      "유아스카프",
      "유아가방",
      "유아우산",
    ],
    유아동잡화: [
      "구두/운동화/샌들/부츠",
      "장화/우비/우산",
      "모자/장갑",
      "책가방/여행가방",
      "유아가방",
      "유아지갑",
      "유아벨트",
      "유아시계",
      "유아반지",
      "유아목걸이",
      "유아팔찌",
      "유아귀걸이",
      "유아선글라스",
      "유아헤어밴드",
      "유아헤어핀",
      "유아리본",
      "유아손목시계",
      "유아주얼리세트",
      "유아액세서리세트",
      "유아패션소품",
    ],
    "유아동교구/완구": [
      "신생아 완구",
      "원목교구",
      "음악놀이/자석교구",
      "전동차/핫힐",
      "로봇",
      "인형/디즈니의상",
      "블록/레고",
      "대형 완구용품",
      "퍼즐/보드게임",
      "그림그리기/미술용품",
      "독서/학습교구",
      "과학실험용품",
      "음악악기",
      "운동/스포츠용품",
      "역할놀이용품",
      "공작/만들기용품",
      "전자/디지털완구",
      "교육용완구",
      "창작/예술완구",
      "사회성발달완구",
      "인지발달완구",
      "신체발달완구",
      "언어발달완구",
      "정서발달완구",
      "창의력완구",
    ],
    "기타 유아동 물품": [
      "유아도서/교재",
      "유아DVD/CD",
      "유아학습지",
      "유아프로그램",
      "유아체험학습",
      "유아캠프/여행",
      "유아생일파티",
      "유아이벤트",
      "유아기념품",
      "유아선물세트",
      "유아카드/편지지",
      "유아스티커/스탬프",
      "유아포토앨범",
      "유아기록용품",
      "유아추억용품",
    ],
  };

  return (
    <header className="w-full border-b border-[#ddd] relative">
      <div className="flex justify-center items-center mx-auto gap-10 py-4">
        <div className="left">
          <Link href={"/"}>
            <div className="flex items-center gap-2">
              <Image src="/header/header-logo.png" width={40} height={40} alt="header-logo.png" />
              <span className="text-xl font-bold">Momnect</span>
            </div>
          </Link>
        </div>
        <div className="center">
          <div className="bg-[#F1F4F6] relative rounded-[6px] w-[612px] h-[44px] px-4 py-[10px]">
            <input
              type="text"
              className="w-full outline-none bg-transparent"
              placeholder="어떤 육아 용품을 찾고 계신가요?"
            />
            <div className="absolute top-[10px] right-[16px] cursor-pointer">
              <Search />
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 pt-4">
            <ul className="flex gap-4">
              <li className="flex justify-center items-center relative">
                <div
                  className="relative"
                  onMouseEnter={() => setIsCategoryOpen(true)}
                  onMouseLeave={() => setIsCategoryOpen(false)}
                >
                  <Button className="bg-[#85B3EB] hover:bg-[#65A2EE] w-[110px] h-[44px]">
                    <Menu color="#ffffff" />
                    카테고리
                  </Button>

                  {/* 카테고리 드롭다운 메뉴 */}
                  {isCategoryOpen && (
                    <div className="absolute top-[60px] left-0 bg-white border border-[#ddd] shadow-lg z-50 rounded-md min-w-[720px] max-h-[500px]">
                      {/* 호버 브리지 - 버튼과 메뉴 사이 공백을 채워줌 */}
                      <div className="absolute -top-[60px] left-0 w-full h-[60px] bg-transparent"></div>
                      <div className="overflow-y-auto max-h-[500px]">
                        <div className="py-6 px-6">
                          <div className="grid grid-cols-3 gap-8">
                            {/* 첫 번째 열 - 출산/육아용품 */}
                            <div>
                              <h3 className="font-bold text-lg mb-4 text-gray-800">출산/육아용품</h3>
                              <ul className="space-y-2">
                                {categoryData["출산/육아용품"].map((item, index) => (
                                  <li key={index}>
                                    <Link href="#" className="text-gray-600 hover:text-gray-800 text-sm">
                                      {item}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* 두 번째 열 - 유아동의류 & 유아동잡화 */}
                            <div className="space-y-6">
                              <div>
                                <h3 className="font-bold text-lg mb-4 text-gray-800">유아동의류</h3>
                                <ul className="space-y-2">
                                  {categoryData["유아동의류"].map((item, index) => (
                                    <li key={index}>
                                      <Link href="#" className="text-gray-600 hover:text-gray-800 text-sm">
                                        {item}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h3 className="font-bold text-lg mb-4 text-gray-800">유아동잡화</h3>
                                <ul className="space-y-2">
                                  {categoryData["유아동잡화"].map((item, index) => (
                                    <li key={index}>
                                      <Link href="#" className="text-gray-600 hover:text-gray-800 text-sm">
                                        {item}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* 세 번째 열 - 유아동교구/완구 & 기타 */}
                            <div className="space-y-6">
                              <div>
                                <h3 className="font-bold text-lg mb-4 text-gray-800">유아동교구/완구</h3>
                                <ul className="space-y-2">
                                  {categoryData["유아동교구/완구"].map((item, index) => (
                                    <li key={index}>
                                      <Link href="#" className="text-gray-600 hover:text-gray-800 text-sm">
                                        {item}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h3 className="font-bold text-lg mb-4 text-gray-800">기타 유아동 물품</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </li>
              <li className="flex justify-center items-center">
                <Link href={"#"}>
                  <Button className="bg-[#85B3EB] hover:bg-[#65A2EE] w-[110px] h-[44px]">
                    <Heart color="#ffffff" fill="#ffffff" />
                    찜한상품
                  </Button>
                </Link>
              </li>
              <li className="flex justify-center items-center">
                <Link href={"#"}>
                  <Button className="bg-[#85B3EB] hover:bg-[#65A2EE] w-[110px] h-[44px]">
                    <Image src={"/header/tabler_bulb.png"} width={24} height={24} alt="육아꿀팁" />
                    육아꿀팁
                  </Button>
                </Link>
              </li>
              <li className="flex justify-center items-center">
                <Link href={"#"}>
                  <Button className="bg-[#85B3EB] hover:bg-[#65A2EE] w-[110px] h-[44px]">
                    <Image src={"/header/shopping-bag.png"} width={18} height={18} alt="공동구매" />
                    공동구매
                  </Button>
                </Link>
              </li>
              <li className="flex justify-center items-center">
                <Link href={"#"}>
                  <Button className="bg-[#85B3EB] hover:bg-[#65A2EE] w-[110px] h-[44px]">
                    <Image src={"/header/fluent-mdl2_special-event.png"} width={18} height={18} alt="이벤트" />
                    이벤트
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="min-w-[300px]">
            <ul className="flex w-full">
              <li>
                <Link href={"#"} className="flex items-center gap-1">
                  <MessageCircleMore color="#000000" />
                  <span className="text-sm">채팅하기</span>
                </Link>
              </li>
              <li className="px-3">|</li>
              <li>
                <Link href={"#"} className="flex items-center gap-1">
                  <ShoppingBag color="#000000" />
                  <span className="text-sm">판매하기</span>
                </Link>
              </li>
              <li className="px-3">|</li>
              <li>
                <Link href={"#"} className="flex items-center gap-1">
                  <User color="#000000" />
                  <span className="text-sm">마이</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
