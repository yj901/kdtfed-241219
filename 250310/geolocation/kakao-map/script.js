const url =
  "https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=500&pageNo=1&MobileOS=ETC&MobileApp=gocamping&serviceKey=T2HLCbQ1pSNRT81yC%2FNbstP7UC8DHQLmPe2%2FbeHPvcWryA3xkR5B7DENvwwYHFshPR4BOUCa1W20KqDHywu2YQ%3D%3D&_type=json";

fetch(url)
  .then((res) => res.json())
  .then((result) => {
    const data = result.response.body.items.item;

    const showPosition = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      var container = document.getElementById("map");

      var options = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 3,
      };

      var map = new kakao.maps.Map(container, options);

      // 마커 클러스터러를 생성합니다
      var clusterer = new kakao.maps.MarkerClusterer({
        map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
        minLevel: 10, // 클러스터 할 최소 지도 레벨
      });

      // 마커를 표시할 위치와 title 객체 배열입니다
      // var positions = [
      //   {
      //     title:
      //       "<div style='padding: 10px; font-size: 0.8rem;'>EZEN DX CENTER</div>",
      //     latlng: new kakao.maps.LatLng(latitude, longitude),
      //   },
      //   {
      //     title:
      //       "<div style='padding: 10px; font-size: 0.8rem;'>하이미디어</div>",
      //     latlng: new kakao.maps.LatLng(37.4987358, 127.0266779),
      //   },
      //   {
      //     title:
      //       "<div style='padding: 10px; font-size: 0.8rem;'>그린아카데미 강남캠퍼스</div>",
      //     latlng: new kakao.maps.LatLng(37.5001513, 127.0290763),
      //   },
      //   {
      //     title:
      //       "<div style='padding: 10px; font-size: 0.8rem;'>SBS아카데미 강남캠퍼스</div>",
      //     latlng: new kakao.maps.LatLng(37.4979437, 127.0265374),
      //   },
      // ];

      let markers = [];

      for (var i = 0; i < data.length; i++) {
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: new kakao.maps.LatLng(data[i].mapY, data[i].mapX),
          //
        });

        markers.push(marker);

        var infowindow = new kakao.maps.InfoWindow({
          content: data[i].title,
        });

        function makeOverListener(map, marker, infowindow) {
          return function () {
            infowindow.open(map, marker);
          };
        }
        function makeOutListener(infowindow) {
          return function () {
            infowindow.close();
          };
        }

        kakao.maps.event.addListener(
          marker,
          "mouseover",
          makeOverListener(map, marker, infowindow)
        );

        kakao.maps.event.addListener(
          marker,
          "mouseout",
          makeOutListener(infowindow)
        );
      }

      // 클러스터러에 마커들을 추가합니다
      clusterer.addMarkers(markers);
    };

    const errorposition = (err) => {
      alert(err.message);
    };

    navigator.geolocation.getCurrentPosition(showPosition, errorposition);
  });
