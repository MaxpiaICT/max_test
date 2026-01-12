"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

export default function SolutionsPage() {
  const [openCard, setOpenCard] = useState<number | null>(null);

  const cards = [
    {
      tag: '웹 호스팅',
      title1: 'Web',
      title2: 'Hosting',
      details: [
        { title: 'Linux 호스팅', desc: 'PHP, MySQL, Perl 등 오픈소스 기반 웹사이트에 최적화된 리눅스 OS 기반 호스팅 서비스' },
        { title: 'Windows 호스팅', desc: '윈도우 기반 애플리케이션을 언제 어디서나 사용 가능하도록 고성능 디스크와 네트워크 제공' },
        { title: 'NFT 호스팅', desc: 'NFT 관련 데이터의 저장, 접근, 표시, 관리 등을 지원하는 특화 서비스' },
      ],
    },
    {
      tag: '클라우드 호스팅',
      title1: 'Cloud',
      title2: 'Hosting',
      details: [
        { title: '탄력적 확장', desc: '클라우드 인프라로 웹/애플리케이션을 배포하며, 여러 물리·가상 서버 자원을 묶어 탄력적 확장 가능' },
        { title: '하이브리드 클라우드', desc: '전용기업 전용, 보안 및 커스터마이징 강화' },
        { title: '커뮤니티 클라우드', desc: '특정 그룹·조직이 자원 공유, 비용·목적 효율성 증진' },
      ],
    },
    {
      tag: '서버 호스팅',
      title1: 'Server',
      title2: 'Hosting',
      details: [
        { title: 'VPS 호스팅', desc: '가상 서버로 물리 서버 하나를 나눠 자원 예약 제공, 공유 호스팅보다 높은 제어권' },
        { title: '공유 호스팅', desc: '다수 웹사이트가 하나 서버 자원 공유, 낮은 비용이 간편한 관리' },
        { title: '매니지드 호스팅', desc: '서버 관리를 공급업체가 대신 수행, IT 전문가 부족한 중소기업 대상' },
        { title: '셀프 호스팅', desc: '사용자가 직접 하드웨어·네트워크 환경 준비해 서버 운영' },
        { title: '스트리밍 호스팅', desc: '미디어 콘텐츠 실시간 또는 주문형 전송에 최적화된 서비스' },
      ],
    },
    {
      tag: '데이터 베이스 호스팅',
      title1: 'DB',
      title2: 'Hosting',
      details: [
        { title: '', desc: 'DB를 중앙서버에 저장·관리하는 서비스로, 웹/모바일 앱 데이터 처리에 활용' },
        { title: 'On-Premises', desc: '자체 공간에 하드웨어 설치해 직접 운영' },
        { title: 'Managed DB Hosting', desc: '공급업체가 관리, 중소기업에 적합' },
        { title: 'DBaaS', desc: '클라우드 기반 DB 서비스, 웹 인터페이스/API로 조작 가능' },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* 상단 고정 헤더 */}
      <Header />

      {/* Hero Section */}
      <section className="h-[calc(screen/2)] py-24 flex flex-col items-center justify-center text-center px-4" style={{ background: 'linear-gradient(to top right, #ffffff 0%, #ffffff 70%,rgb(252, 252, 252) 100%)' }}>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12">가상서버 및 위탁 노드 운영 서비스</h1>
        <p className="max-w-xl text-sm md:text-base text-gray-600 leading-relaxed mb-12">
          신뢰할 수 있는 클라우드 인프라와 전문 노드 운영 서비스를<br />통해 귀사의 디지털 자산을 안전하게 관리합니다.
        </p>
      </section>
      
      {/* 서비스 카드 섹션 */}
      <section
        className="relative py-32"
        style={{ background: 'linear-gradient(to bottom, rgb(245,245,245) 0%, rgb(255, 255, 255) 50%,rgb(60, 190, 190) 100%)' }}
      >
        <div className="mx-auto w-full max-w-6xl px-6">
          <h2 className="text-center text-xl md:text-2xl font-bold mb-12">
            <span className="text-[#04AAAB] font-extrabold">가상서버 (Cloud VPS)</span> 클라우드 서버 임대 서비스 소개
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {/* 카드 데이터 */}
            {cards.map((c, idx) => (
              <div key={idx} className="relative flex flex-col">
                <div
                  className="group rounded-lg shadow-md flex flex-col justify-between min-h-[180px] overflow-hidden bg-gradient-to-b from-[#E8E5E5] to-white backdrop-blur-sm text-gray-800 hover:text-white hover:bg-gradient-to-br hover:from-[#04AAAB] hover:to-[#F8C3E2] transition-colors"
                >
                  <div className="p-6 space-y-1">
                    <p className="text-xs tracking-wide text-gray-500 group-hover:text-white">{c.tag}</p>
                    <h3 className="text-2xl font-semibold leading-tight bg-gradient-to-b from-[#04AAAB] to-[#A94F88] bg-clip-text text-transparent group-hover:text-white group-hover:bg-none">
                      {c.title1}<br />{c.title2}
                  </h3>
                </div>
                <button onClick={(e) => { e.preventDefault(); setOpenCard(openCard === idx ? null : idx); }} className="w-full h-12 bg-[#EAEAEA] group-hover:bg-gray-900 text-gray-800 group-hover:text-white text-xs flex items-center justify-end pr-6 transition-colors">{openCard === idx ? '자세히 보기 -' : '자세히 보기 +'}
                </button>
                </div>
                {/* 상세 오버레이 */}
                <div className={`absolute left-0 top-[97%] w-full rounded-b-lg bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-500 overflow-hidden transform ${openCard === idx ? 'opacity-100 translate-y-0 z-20' : 'opacity-0 -translate-y-4 pointer-events-none z-0'}`}> 
                  <ul className="p-6 space-y-4 text-sm text-gray-700">
                    {c.details.map((d, i) => (
                      <li key={i}>
                        {d.title && <p className="font-semibold text-sm text-gray-800 pb-1">{d.title}</p>}
                        <p className="text-xs text-gray-600">{d.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 기타 블록체인·서버 부가 서비스 섹션 */}
      <section className="px-4 mt-32 mb-40">
        <div className="container mx-auto flex flex-col items-center justify-center pt-12">
          <h3 className="text-3xl font-extrabold text-center text-[#04AAAB] mb-4">
            솔루션 & 서비스
          </h3>

          <h3 className="text-3xl font-extrabold text-center">
            <span className="text-[#04AAAB]">블록체인·서버</span>
            <span className="text-gray-600"> 관련 부가 서비스</span>
          </h3>

          <div className="flex justify-center mt-24 relative" style={{ minHeight: '400px' }}>
            {/* 연결선 */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ maxWidth: '480px', maxHeight: '350px' }}>
              <style>{`
                @keyframes lineShine {
                  0% {
                    stroke-dashoffset: 200;
                    opacity: 0.4;
                  }
                  50% {
                    opacity: 0.8;
                  }
                  100% {
                    stroke-dashoffset: 0;
                    opacity: 0.4;
                  }
                }
                .animated-line {
                  animation: lineShine 3s ease-in-out infinite;
                }
                .animated-line-delay-1 {
                  animation: lineShine 3s ease-in-out infinite 0.5s;
                }
                .animated-line-delay-2 {
                  animation: lineShine 3s ease-in-out infinite 1s;
                }
              `}</style>
              {/* 상단 노드에서 왼쪽 하단 노드로 */}
              <line 
                x1="50%" 
                y1="25%" 
                x2="25%" 
                y2="65%" 
                stroke="#9CA3AF" 
                strokeWidth="4" 
                strokeDasharray="15 10"
                className="animated-line"
                opacity="0.6"
              />
              {/* 상단 노드에서 오른쪽 하단 노드로 */}
              <line 
                x1="50%" 
                y1="25%" 
                x2="75%" 
                y2="65%" 
                stroke="#9CA3AF" 
                strokeWidth="4" 
                strokeDasharray="15 10"
                className="animated-line-delay-1"
                opacity="0.6"
              />
              {/* 왼쪽 하단 노드에서 오른쪽 하단 노드로 */}
              <line 
                x1="25%" 
                y1="65%" 
                x2="75%" 
                y2="65%" 
                stroke="#9CA3AF" 
                strokeWidth="4" 
                strokeDasharray="15 10"
                className="animated-line-delay-2"
                opacity="0.6"
              />
            </svg>

            {/* 노드 컨테이너 */}
            <div className="relative" style={{ width: '480px', height: '320px' }}>
              {/* 상단 노드 - 노드 구축 지원 */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center group">
                <span className="text-gray-700 text- font-semibold text-center mb-3">노드 구축 지원</span>
                <div className="w-28 h-20 rounded-2xl flex items-center justify-center border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2 cursor-pointer" 
                     style={{ background: 'linear-gradient(to right, #04AAAB, #F8C3E2)' }}>
                  <Image src="/s_icon_1.svg" alt="노드 구축 지원" width={48} height={48} className="transition-transform duration-300 group-hover:scale-110" />
                </div>
              </div>

              {/* 왼쪽 하단 노드 - 맞춤형 개발 */}
              <div className="absolute bottom-0 left-0 flex flex-col items-center group">
                <div className="w-28 h-20 rounded-2xl flex items-center justify-center mb-3 border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2 cursor-pointer"
                     style={{ background: 'linear-gradient(to right, #04AAAB, #F8C3E2)' }}>
                  <Image src="/s_logo_2.svg" alt="맞춤형 개발" width={38} height={38} className="transition-transform duration-300 group-hover:scale-110" />
                </div>
                <span className="text-gray-700 text-2x1 font-semibold text-center">맞춤형 개발</span>
              </div>

              {/* 오른쪽 하단 노드 - 컨설팅 */}
              <div className="absolute bottom-0 right-0 flex flex-col items-center group">
                <div className="w-28 h-20 rounded-2xl flex items-center justify-center mb-3 border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2 cursor-pointer"
                     style={{ background: 'linear-gradient(to right, #04AAAB, #F8C3E2)' }}>
                  <Image src="/s_logo_3.svg" alt="컨설팅" width={38} height={38} className="transition-transform duration-300 group-hover:scale-110" />
                </div>
                <span className="text-gray-700 text-2x1 font-semibold text-center">컨설팅</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 솔루션 섹션4 - 블록체인 노드 운영 솔루션 */}
      <section 
        className="relative px-20 overflow-hidden bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg_solutions_section_4.png')",
          backgroundSize: '100% 100%',
        }}
      >
        {/* 콘텐츠 */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* 왼쪽 텍스트 섹션 */}
            <div className="w-2/3 text-left">
              <div className="mb-20">
                <div className="flex items-center gap-2 mb-4">
                  <Image src="/icon_solutions_section_4.png" alt="solution icon" width={35} height={35} />
                  <h2 className="text-3xl font-semibold text-gray-800">블록체인 기반 노드 운영 솔루션</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 pl-6 lg:w-[85%]">
                  전문적인 인프라와 경험을 바탕으로 법적·규정에 부합하는 안전한 노드를 운영하며, 
                  안정적이고 효율적인 노드 운영이 가능하도록 최적화된 소프트웨어와 설비 보수, 
                  다수의 검증된 노드풀을 제공합니다. 또한, 실시간 모니터링 시스템을 통해 노드 운영 
                  현황과 수익을 투명하게 관리하고 정산함으로써 고객이 신뢰하고 맡길 수 있는 
                  고품질의 위탁 노드 운영 서비스를 제공합니다.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Image src="/icon_solutions_section_4.png" alt="solution icon" width={35} height={35} />
                  <h3 className="text-3xl font-semibold text-gray-800">시스템 통합 운영 솔루션</h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-6 lg:w-[85%]">
                주기적인 성능 점검과 신속한 장애 처리로 운영 비용을 절감하고, 일관된 보안 정책 적용과 확장성을 고려한 체계적인 보안 관리로 시스템 안정성을 확보합니다. 또한, 운영 절차의 표준화를 통해 전반적인 품질 향상과 업무 효율성을 높이며, 전문 기술 조직의 상시 지원을 통해 시스템을 지속적으로 최적화하는 통합 운영 방안을 제공합니다
                </p>
              </div>
            </div>

            {/* 오른쪽 체인 이미지 섹션 */}
            <div className="lg:w-1/3 flex justify-center">
              <Image src="/img_solutions_section_4.png" alt="blockchain solutions" width={500} height={500} />
            </div>
          </div>
        </div>
      </section>

      {/* 솔루션 섹션5 */}
      <section className="px-20 my-20 container mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">노드 운영 서비스</h2>
          <p className="text-gray-500">
            다양한 주요 코인 노드 운영에 성공적으로 참여하며, 미래 유망 코인에도 선제적으로 대응합니다.
          </p>
        </div>
        
        {/* 구분선 */}
        <div className="border-b border-gray-200 mb-16"></div>

        {/* 대표 참여 코인 헤더 */}
        <div className="mb-12 flex items-center gap-4">
          <Image src="/icon_solution_section_5.png" alt="대표 참여 코인" width={200} height={100} className="w-[12%] h-auto"/>
        </div>

        {/* 코인 카드 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              icon: '/img_1_solution_section_5.png',
              name: '비트코인 (Bitcoin, BTC)',
              description: '탈중앙화된 디지털 통화로, 블록체인 기술을 기반으로 안전하고 투명한 거래를 지원하는 최초의 암호화폐'
            },
            {
              icon: '/img_2_solution_section_5.png',
              name: '이더리움 (Ethereum, ETH)',
              description: '스마트 계약 기능을 지원하는 오픈소스 블록체인 플랫폼으로, 다양한 분산 애플리케이션(dApp) 개발 가능'
            },
            {
              icon: '/img_3_solution_section_5.png',
              name: '파일코인 (Filecoin, FIL)',
              description: '탈중앙화된 데이터 저장 네트워크로, 사용자가 여유 저장 공간을 제공하고 보상으로 코인을 받는 블록체인 기반 분산 스토리지 시스템'
            },
            {
              icon: '/img_4_solution_section_5.png',
              name: '알레오 (Aleo, ALEO)',
              description: '영지식증명(ZKPs)을 활용한 Layer 1 블록체인'
            }
          ].map((coin) => (
            <div key={coin.name} className="bg-gradient-to-b from-[#FFF9F9] to-[#EEEEEE] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <Image src={coin.icon} alt={`${coin.name} icon`} width={48} height={48} className="mb-6"/>
              <h4 className="font-bold text-lg mb-3">{coin.name}</h4>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">{coin.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
} 