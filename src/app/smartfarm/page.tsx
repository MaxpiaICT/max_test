"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useRef } from "react";

export default function SmartFarmPage() {
  const industriesScrollRef = useRef<HTMLDivElement>(null);
  
  // #region agent log
  useEffect(() => {
    fetch('http://127.0.0.1:7249/ingest/73c27553-e5fc-4ac9-9095-bbc230576d8e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'smartfarm/page.tsx:11',message:'SmartFarmPage component mounted',data:{featuresCount:4},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
  }, []);
  // #endregion

  const cropsScrollRef = useRef<HTMLDivElement>(null);

  // 자동 스크롤 애니메이션 (INDUSTRIES)
  useEffect(() => {
    const scrollContainer = industriesScrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    let isPaused = false;
    const scrollSpeed = 0.5;
    
    const autoScroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed;
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
    };

    const intervalId = setInterval(autoScroll, 16);
    
    const handleMouseEnter = () => { isPaused = true; };
    const handleMouseLeave = () => { isPaused = false; };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(intervalId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // 자동 스크롤 애니메이션 (CROPS)
  useEffect(() => {
    const scrollContainer = cropsScrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    let isPaused = false;
    const scrollSpeed = 0.5;
    
    const autoScroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed;
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
    };

    const intervalId = setInterval(autoScroll, 16);
    
    const handleMouseEnter = () => { isPaused = true; };
    const handleMouseLeave = () => { isPaused = false; };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(intervalId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  const features = [
    {
      icon: "/smartfarm/icon-1.svg",
      title: "정밀 환경 제어 시스템"
    },
    {
      icon: "/smartfarm/icon-2.svg",
      title: "순환형 수경재배 구조"
    },
    {
      icon: "/smartfarm/icon-3.svg",
      title: "고효율 LED 광원 설계"
    },
    {
      icon: "/smartfarm/icon-4.svg",
      title: "생육 데이터 수집·분석"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* ================= HERO ================= */}
        <section className="mx-auto w-full max-w-6xl px-4 pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-items-center lg:justify-items-center">
            {/* 왼쪽 텍스트 섹션 */}
            {/* #region agent log */}
            <div 
              className="w-full max-w-lg"
              onLoad={() => {
                fetch('http://127.0.0.1:7249/ingest/73c27553-e5fc-4ac9-9095-bbc230576d8e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'smartfarm/page.tsx:66',message:'Left text section rendered',data:{section:'text'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
              }}
            >
            {/* #endregion */}
              <p className="text-4xl font-semibold text-shine">
                농업에 ICT를 연결하다
              </p>
              <h1 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900 whitespace-nowrap">
                Maxpia ICT 스마트재배기술 연구소
              </h1>
              <p className="mt-12 text-gray-500 leading-relaxed">
                환경데이터·자동제어·모니터링·원격운영
                <br />
                재배의 전 과정을 디지털로 통합 관리하는 스마트팜 솔루션
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4 max-w-md">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-gray-200 bg-white p-4 group hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={49}
                          height={43}
                          className="w-12 h-auto group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                        />
                      </div>
                      <div className="text-sm font-medium text-gray-800">
                        {feature.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 오른쪽 이미지 섹션 */}
            {/* #region agent log */}
            <div 
              className="relative overflow-hidden w-full flex justify-center lg:justify-end" 
              style={{ borderRadius: '26px' }}
              onLoad={() => {
                fetch('http://127.0.0.1:7249/ingest/73c27553-e5fc-4ac9-9095-bbc230576d8e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'smartfarm/page.tsx:101',message:'Right image section rendered',data:{section:'image'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
              }}
            >
            {/* #endregion */}
              <Image
                src="/smartfarm/1.jpg"
                alt="스마트팜 연구소"
                width={372}
                height={554}
                className="object-cover w-full lg:w-[372px]"
                style={{ height: 'auto', aspectRatio: '372/554', borderRadius: '26px' }}
                onLoad={() => {
                  // #region agent log
                  fetch('http://127.0.0.1:7249/ingest/73c27553-e5fc-4ac9-9095-bbc230576d8e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'smartfarm/page.tsx:99',message:'Hero image loaded successfully',data:{src:'/smartfarm/1.jpg'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
                  // #endregion
                }}
                onError={(e) => {
                  // #region agent log
                  fetch('http://127.0.0.1:7249/ingest/73c27553-e5fc-4ac9-9095-bbc230576d8e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'smartfarm/page.tsx:105',message:'Hero image failed to load',data:{src:'/smartfarm/1.jpg',error:String(e)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
                  // #endregion
                }}
              />
            </div>
          </div>
        </section>

        {/* ================= VALUE ================= */}
        <section className="container mx-auto px-20 py-44">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-3xl font-semibold text-[#04AAAB]">최적의 생육 환경과</p>
            <h2 className="mt-4 text-2xl md:text-3xl font-extrabold">
              데이터 기반 운영 시스템을 결합한 스마트 재배 플랫폼
            </h2>
            <p className="mt-8 text-gray-600">
              연구소는 다단식 수직 재배 구조와 LED 식물조명, 자동 급액 시스템을 기반으로<br />
              제한된 공간에서도 최대 생산 효율을 구현하는 고밀도 수직 농장(Vertical Farm) 형태로 설계되었습니다.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "공간 효율 극대화 구조",
                description: ["다단식 수직 재배 설계로", "공간 대비 생산량을 극대화한 고밀도 재배 환경 구축"],
                image: "/smartfarm/2.jpg"
              },
              {
                title: "데이터 기반 재배 최적화",
                description: ["환경·생육 데이터를 누적 분석하여", "작물별 최적 재배 조건을 표준화"],
                image: "/smartfarm/3.jpg"
              },
              {
                title: "원격 운영·알림 체계",
                description: ["이상 징후 감지 → 즉시 알림 → 빠른 대응으로", "운영 리스크 최소화"],
                image: "/smartfarm/1.jpg"
              }
            ].map((card, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden h-64 shadow-sm"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-5">
                  <div className="font-bold text-white text-lg">{card.title}</div>
                  <div className="mt-2 text-sm text-white/90">
                    {card.description.map((line, idx) => (
                      <span key={idx}>
                        {line}
                        {idx < card.description.length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= BANNER ================= */}
        <section className="relative h-[280px]">
          <Image
            src="/smartfarm/4.png"
            alt="통합 구조"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center">
              <Image
                src="/smartfarm/max_logo.svg"
                alt="Maxpia Logo"
                width={42}
                height={38}
                className="mx-auto mb-4"
              />
              <h3 className="text-white text-3xl font-extrabold mt-1">
                Maxpia ICT 스마트재배<br />
                통합운영 구조
              </h3>
            </div>
          </div>
        </section>

        {/* ================= CONTROL ================= */}
        <section className="mx-auto w-full max-w-6xl px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
              <h3 className="text-3xl font-extrabold leading-relaxed">
                24시간 자동 관리되는<br />
                스마트 환경 제어
              </h3>
            <p className="mt-14 text-gray-600 text-lg">
              온도, 습도, 이산화탄소(CO₂),<br />
              조도 등작물 생육에 필요한 핵심 환경 요소를 실시간으로<br />
             
              모니터링하고 자동 제어 시스템을 통해 최적의 상태를 유지합니다.<br />
              외부 기후 변화와 무관하게 연중 동일한 품질의 작물을<br />
             생산할 수 있는 것이 가장 큰 장점입니다.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:ml-auto lg:mr-0">
            {[
              {
                title: "실내 온도 자동 조절",
                icon: "/smartfarm/a_1.svg"
              },
              {
                title: "공기 순환 및 환기 시스템",
                icon: "/smartfarm/a_2.svg"
              },
              {
                title: "습도 유지 및 결로 방지",
                icon: "/smartfarm/a_3.svg"
              },
              {
                title: "조도 스케줄링 관리",
                icon: "/smartfarm/a_4.svg"
              }
            ].map((card, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white flex flex-col items-center justify-center text-center aspect-square group hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="w-16 h-16 bg-[#04AAAB] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={32}
                    height={32}
                    className="w-16 h-16"
                  />
                </div>
                <div className="font-bold text-gray-800 text-[14px]">{card.title}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= HYDROPONIC ================= */}
        <section className="mx-auto w-full max-w-6xl px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 왼쪽 이미지 */}
            <div className="relative overflow-hidden rounded-2xl w-full max-w-[500px]">
              <Image
                src="/smartfarm/500x270px.png"
                alt="순환형 수경 재배 구조"
                width={500}
                height={270}
                className="max-w-lg mx-auto lg:mx-0"
                style={{ aspectRatio: '500/270' }}
              />
            </div>
            
            {/* 오른쪽 텍스트 */}
            <div className="text-right">
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-relaxed">
                물과 영양분을 정밀하게 공급하는<br />
                순환형 수경 재배 구조
              </h3>
              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                토양 없는 순환형 양액 수경재배 방식을 적용하여<br />
                병해 발생을 낮추고 생육 속도를 향상시킵니다.<br />
                기존 토양 재배 대비 물 사용량을 대폭 절감하고<br />
                영양분 손실을 최소화하여 친환경적인 재배 방식입니다.
              </p>
            </div>
          </div>
        </section>

        {/* ================= RESEARCH ================= */}
        <section className="mx-auto w-full max-w-6xl px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
              <h3 className="text-3xl font-extrabold leading-relaxed">
              단순 재배가 아닌<br />
              농업 기술 연구와 실증을 위한 공간
              </h3>
            <p className="mt-14 text-gray-600 text-lg">
            본 스마트팜 연구소는 단순 생산 목적을 넘어<br />
            작물 생육 데이터 분석, 재배 방식 비교 실험,<br />
             
            신규 품종 테스트 등 다양한 연구가 가능한 실증형 시설입니다.<br />
            수집된 데이터는 향후 대규모 스마트팜 구축,<br />
            농가 보급형 시스템 개발에도 활용됩니다.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:ml-auto lg:mr-0">
            {[
              {
                title: "작물별 최적 광량 실험",
                icon: "/smartfarm/a_5.svg"
              },
              {
                title: "영양액 조성 테스트",
                icon: "/smartfarm/a_6.svg"
              },
              {
                title: "생육 기간 단축 연구",
                icon: "/smartfarm/a_7.svg"
              },
              {
                title: "자동화 시스템 효율 분석",
                icon: "/smartfarm/a_8.svg"
              }
            ].map((card, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white flex flex-col items-center justify-center text-center aspect-square group hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="w-16 h-16 bg-[#04AAAB] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={32}
                    height={32}
                    className="w-16 h-16"
                  />
                </div>
                <div className="font-bold text-gray-800 text-[14px]">{card.title}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= INDUSTRIES ================= */}
        <section className="mx-auto w-full max-w-6xl px-6 py-24">
          <h3 className="text-center text-2xl md:text-3xl font-extrabold text-gray-900 mb-12">
            다양한 산업 분야 적용 가능한 스마트 농업 솔루션
          </h3>
          
          <div className="relative">
            <div ref={industriesScrollRef} className="overflow-x-auto scrollbar-hide scroll-smooth">
              <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
                {[
                  {
                    image: "/smartfarm/5.jpg",
                    title: "연구 기관 및 교육용 실습 시설"
                  },
                  {
                    image: "/smartfarm/7.jpg",
                    title: "도시형 스마트팜"
                  },
                  {
                    image: "/smartfarm/8.jpg",
                    title: "식품 기업 계약 재배"
                  },
                  {
                    image: "/smartfarm/9.jpg",
                    title: "고부가가치 채소 생산"
                  },
                  {
                    image: "/smartfarm/10.jpg",
                    title: "농업 스타트업 테스트베드"
                  }
                ].map((item, i) => (
                  <div key={i} className="relative group overflow-hidden rounded-xl flex-shrink-0" style={{ width: '400px' }}>
                    <div className="relative h-64">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-[#04AAAB] text-white p-4">
                      <div className="font-bold text-center">{item.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* 좌측 페이드 효과 */}
            <div className="absolute top-0 left-0 w-32 h-full pointer-events-none z-10"
              style={{
                background: 'linear-gradient(to right, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.8) 30%, transparent 100%)'
              }}
            />
            {/* 우측 페이드 효과 */}
            <div className="absolute top-0 right-0 w-32 h-full pointer-events-none z-10"
              style={{
                background: 'linear-gradient(to left, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.8) 30%, transparent 100%)'
              }}
            />
          </div>
        </section>

        {/* ================= CROPS ================= */}
        <section className="mx-auto w-full max-w-6xl px-6 py-24">
          <h3 className="text-center text-2xl md:text-3xl font-extrabold text-gray-900 mb-12">
            재배 가능한 작물
          </h3>

          <div className="relative">
            <div ref={cropsScrollRef} className="overflow-x-auto scrollbar-hide scroll-smooth">
              <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
                {[
                  {
                    image: "/smartfarm/p_1.jpg",
                    title: "상추",
                    description: "신선한 잎채소, 연중 안정적인 생산 가능"
                  },
                  {
                    image: "/smartfarm/p_2.jpg",
                    title: "딸기",
                    description: "소형 과실 작물, 계절에 관계없는 재배 가능"
                  },
                  {
                    image: "/smartfarm/p_3.jpg",
                    title: "숙주",
                    description: "발아형 채소, 단기간 대량 생산 가능"
                  },
                  {
                    image: "/smartfarm/p_4.jpg",
                    title: "새싹채소",
                    description: "영양 밀도가 높은 미니 채소, 단기 재배 사이클"
                  },
                  {
                    image: "/smartfarm/p_5.jpg",
                    title: "고추",
                    description: "양념·조리용 채소, 온도 맞춤 제어 재배 가능"
                  },
                  {
                    image: "/smartfarm/p_6.jpg",
                    title: "방울토마토",
                    description: "소형 과실 채소, 수확 주기 단축 가능"
                  },
                  {
                    image: "/smartfarm/p_7.jpg",
                    title: "케일",
                    description: "영양소가 풍부한 슈퍼푸드 채소"
                  },
                  {
                    image: "/smartfarm/p_8.jpg",
                    title: "로메인 상추",
                    description: "샐러드용 채소, 연속 생산 가능"
                  }
                ].map((item, i) => (
                  <div key={i} className="relative group overflow-hidden rounded-xl flex-shrink-0" style={{ width: '400px' }}>
                    <div className="relative h-64">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-5">
                        <div className="font-bold text-white text-2xl mb-2">{item.title}</div>
                        <div className="text-base text-white/90">{item.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* 좌측 페이드 효과 */}
            <div className="absolute top-0 left-0 w-32 h-full pointer-events-none z-10"
              style={{
                background: 'linear-gradient(to right, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.8) 30%, transparent 100%)'
              }}
            />
            {/* 우측 페이드 효과 */}
            <div className="absolute top-0 right-0 w-32 h-full pointer-events-none z-10"
              style={{
                background: 'linear-gradient(to left, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.8) 30%, transparent 100%)'
              }}
            />
          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section className="text-white py-16" style={{ backgroundColor: '#3F3F3F' }}>
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center">
              <h3 className="text-3xl font-extrabold">
                기획부터 운영까지,<br />
                <span className="text-[#04AAAB]">Maxpia ICT</span>가 함께합니다
              </h3>
              <p className="mt-6 text-white/80 text-base">
                본 스마트팜 연구소는 통합 농업 기술 연구 개발 기관으로<br />
                기획부터 운영까지 전 과정을 지원하는 맞춤형 솔루션을 제공합니다.
              </p>
            </div>

            <div className="mt-16 space-y-4">
              {[
                {
                  num: "01",
                  icon: "/smartfarm/a_9.svg",
                  title: "요구 분석",
                  highlight: "작물 · 면적 · 예산 · 목표 생산량 분석",
                  detail: "재배 목적과 운영 환경을 종합적으로 검토하여 최적의 시스템 방향을 정의합니다."
                },
                {
                  num: "02",
                  icon: "/smartfarm/a_10.svg",
                  title: "설계 및 제작",
                  highlight: "구조 · 환경제어 · 급액 · 전기 · 통신 통합 설계",
                  detail: "정밀 제어 장비와 재배 구조를 자체 제작하고, 현장 환경에 맞춰 맞춤형 시스템으로 설계합니다."
                },
                {
                  num: "03",
                  icon: "/smartfarm/a_11.svg",
                  title: "시스템 구축 및 시운전",
                  highlight: "설비 설치 · 환경 제어 · 급액 · 조명 통합 세팅",
                  detail: "전체 설비를 연동하여 실제 운영 조건에서 시운전을 통해 안정성을 검증합니다."
                },
                {
                  num: "04",
                  icon: "/smartfarm/a_12.svg",
                  title: "실증 재배 및 대시보드 연동",
                  highlight: "실제 작물 재배 실험 · 데이터 수집 · 알림 설정",
                  detail: "대시보드를 통해 환경 · 생육 데이터를 실시간 확인하고 이상 징후 감지 시 즉시 대응 가능한 운영 체계를 구축합니다."
                },
                {
                  num: "05",
                  icon: "/smartfarm/a_13.svg",
                  title: "운영 안정화 및 기술 전수",
                  highlight: "데이터 기반 최적화 · 시스템 개선 · 기술 보급",
                  detail: "축적된 생육 데이터를 분석해 재배 조건을 고도화하고, 검증된 기술을 농가 및 대규모 농장에 전수합니다."
                }
              ].map((item) => (
                <div
                  key={item.num}
                  className="bg-gray-100 rounded-xl px-6 py-6 grid grid-cols-1 gap-4 lg:grid-cols-[40px_280px_1fr] lg:gap-8 lg:items-center group"
                >
                  {/* 왼쪽 아이콘 */}
                  <div className="w-12 h-12 bg-[#04AAAB] rounded-xl flex items-center justify-center">
                    <Image 
                      src={item.icon} 
                      alt={item.title} 
                      width={32} 
                      height={32} 
                      className="w-10 h-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" 
                    />
                  </div>

                  {/* 가운데 큰 타이틀 */}
                  <div className="text-xl font-extrabold text-gray-700 whitespace-nowrap">
                    {item.num}. {item.title}
                  </div>

                  {/* 오른쪽 설명(2줄) */}
                  <div>
                    <div className="font-bold text-gray-900">
                      {item.highlight}
                    </div>
                    <div className="mt-2 text-gray-700">
                      {item.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-white text-base leading-relaxed">
                스마트팜 연구소는 기술과 농업이 만나는 가장 현실적인 미래입니다.<br />
                공간, 기후, 인력의 한계를 뛰어넘는 지속 가능한 농업 모델을 실현합니다.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
