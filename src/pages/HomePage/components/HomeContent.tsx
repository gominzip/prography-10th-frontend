function HomeContent() {
  return (
    <div className="flex flex-col text-center gap-9 mb-10">
      <img className="mx-auto" src="/src/assets/images/logo.png" alt="Prography Logo" />
      <h1 className="font-semibold text-3xl">안녕하세요. 새로운 가치를 만들어가는 IT커뮤니티, Prography 입니다.</h1>
      <p className=" font-semibold text-xl text-blue-500">드디어 Prography 10기 모집이 시작되었습니다.</p>

      <div className="text-base">
        <p>Product Owner / Design / iOS / AOS / Frontend(React) / Backend(Spring)</p>
        <p>총 6개의 파트를 모집합니다.</p>
      </div>

      <div className="flex flex-col gap-3 text-base">
        <p>✓ 새로운 가치를 만들어내는 데 가슴이 두근거린다면,</p>
        <p>✓ 열정적인 IT인들과 함께 사이드 프로젝트를 하고 싶다면,</p>
        <p>✓ 탁월한 동료들과 짜릿한 성취감을 느껴보고 싶다면,</p>
      </div>

      <div>
        <p className="text-2xl font-bold text-blue-500 mb-1">"프로답게, 재미있게"</p>
        <p className="text-base">재미있는 작당을 함께 만들어갈 10기에 합류하세요.</p>
      </div>

      <div>
        <p className="text-base mb-5">📌 자세한 정보는 아래 페이지에 담아뒀으니, 지원 전 꼭 확인해주세요 👇</p>
        <div className="flex flex-col text-base text-blue-500 font-medium gap-3">
          <a href="https://prography-admin.notion.site/apply-prography10">프로그래피 10기 모집 자세히 알아보기</a>
          <a href="https://prography.org">🏡 공식 홈페이지</a>
          <a href="https://www.instagram.com/prography_official">🔗 인스타그램</a>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
