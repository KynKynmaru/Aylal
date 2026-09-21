/* =====================================
   MAP
===================================== */

const map = L.map(
    "mongoliaMap",
    {
        zoomControl: false,
        attributionControl: false,

        dragging: false,

        scrollWheelZoom: false,

        doubleClickZoom: false,

        boxZoom: false,

        keyboard: false,

        touchZoom: false
    }
);


/* =====================================
   GEOJSON
===================================== */

const GEOJSON_URL =
"https://raw.githubusercontent.com/Bilgee/mongolia-geojson/master/mongolia.prefectures.geojson";


/* =====================================
   PROVINCE DATA
===================================== */

const provinceInfo = {

    Arkhangai: {

        name: "Архангай",

        code: "АР",

        description:
        "Аймгийн төв болох Цэцэрлэг хот Улаанбаатар хотоос 521 км зайтай оршдог. Нутаг дэвсгэрийн хэмжээ 55.3 мянган хавтгай дөрвөлжин км. Засаг захиргааны 19 сум, 99 багтай.",

        center:
        "Монголын төв хэсэг",

        feature:
        "Хангайн нуруу",

        image:
        "https://i1.sndcdn.com/artworks-000085517006-80jxbq-t1080x1080.jpg",

        photos: [
            "https://loremflickr.com/600/400/mongolia,arkhangai",
            "https://loremflickr.com/600/400/mongolia,khangai"
        ]
    },


    Bayankhongor: {

        name: "Баянхонгор",

        code: "БХ",

        description:
        "Хангай, говь хосолсон байгальтай бөгөөд Монголын төвийн өмнөд хэсэгт оршдог.",

        center:
        "Төвийн өмнөд хэсэг",

        feature:
        "Хангай ба говь",

        image:
        "https://loremflickr.com/900/600/mongolia,desert",

        photos: [
            "https://loremflickr.com/600/400/mongolia,desert",
            "https://loremflickr.com/600/400/mongolia,mountain"
        ]
    },


    BayanOlgii: {

        name: "Баян-Өлгий",

        code: "БӨ",

        description:
        "Монголын баруун хязгаарт орших, Алтайн өндөр уулс, мөсөн гол, бүргэдийн ан агнуураараа алдартай.",

        center:
        "Баруун Монгол",

        feature:
        "Алтайн нуруу",

        image:
        "https://loremflickr.com/900/600/mongolia,altai",

        photos: [
            "https://loremflickr.com/600/400/mongolia,altai",
            "https://loremflickr.com/600/400/mongolia,eagle"
        ]
    },


    Bulgan: {

        name: "Булган",

        code: "БУ",

        description:
        "Монголын хойд хэсэгт орших, ой тайга, уул ус бүхий байгалийн үзэсгэлэнт аймаг.",

        center:
        "Хойд Монгол",

        feature:
        "Ой тайга",

        image:
        "https://loremflickr.com/900/600/mongolia,forest",

        photos: [
            "https://loremflickr.com/600/400/mongolia,forest",
            "https://loremflickr.com/600/400/mongolia,nature"
        ]
    },


    DarkhanUul: {

        name: "Дархан-Уул",

        code: "ДА",

        description:
        "Монголын хойд хэсгийн аж үйлдвэр, худалдааны томоохон төв. Дархан хот аймгийн төв юм.",

        center:
        "Хойд Монгол",

        feature:
        "Дархан хот",

        image:
        "https://loremflickr.com/900/600/darkhan,mongolia",

        photos: [
            "https://loremflickr.com/600/400/darkhan,mongolia",
            "https://loremflickr.com/600/400/mongolia,city"
        ]
    },


    Dornod: {

        name: "Дорнод",

        code: "ДО",

        description:
        "Монголын зүүн хэсэгт орших өргөн уудам тал хээр бүхий аймаг.",

        center:
        "Зүүн Монгол",

        feature:
        "Тал хээр",

        image:
        "https://loremflickr.com/900/600/mongolia,steppe",

        photos: [
            "https://loremflickr.com/600/400/mongolia,steppe",
            "https://loremflickr.com/600/400/mongolia,grassland"
        ]
    },


    Dornogovi: {

        name: "Дорноговь",

        code: "ДГ",

        description:
        "Монголын зүүн өмнөд хэсэгт орших говийн бүсийн аймаг.",

        center:
        "Зүүн өмнөд Монгол",

        feature:
        "Говийн бүс",

        image:
        "https://loremflickr.com/900/600/mongolia,gobi",

        photos: [
            "https://loremflickr.com/600/400/mongolia,gobi",
            "https://loremflickr.com/600/400/mongolia,desert"
        ]
    },


    Dundgovi: {

        name: "Дундговь",

        code: "ДУ",

        description:
        "Монголын төвийн өмнөд хэсэгт орших, говийн уудам нутгаар хүрээлэгдсэн аймаг.",

        center:
        "Төвийн өмнөд Монгол",

        feature:
        "Говь",

        image:
        "https://loremflickr.com/900/600/mongolia,desert",

        photos: [
            "https://loremflickr.com/600/400/mongolia,desert",
            "https://loremflickr.com/600/400/mongolia,rock"
        ]
    },


    GoviAltai: {

        name: "Говь-Алтай",

        code: "ГА",

        description:
        "Алтайн нуруу болон говийн бүс хосолсон Монголын баруун өмнөд хэсгийн аймаг.",

        center:
        "Баруун өмнөд Монгол",

        feature:
        "Алтайн нуруу",

        image:
        "https://loremflickr.com/900/600/mongolia,altai",

        photos: [
            "https://loremflickr.com/600/400/mongolia,mountain",
            "https://loremflickr.com/600/400/mongolia,desert"
        ]
    },


    Govisumber: {

        name: "Говьсүмбэр",

        code: "ГС",

        description:
        "Монголын төвийн зүүн өмнөд хэсэгт орших говийн бүсийн аймаг.",

        center:
        "Төвийн зүүн өмнөд",

        feature:
        "Говийн тал",

        image:
        "https://loremflickr.com/900/600/mongolia,gobi",

        photos: [
            "https://loremflickr.com/600/400/mongolia,gobi",
            "https://loremflickr.com/600/400/mongolia,steppe"
        ]
    },


    Khentii: {

        name: "Хэнтий",

        code: "ХЭ",

        description:
        "Монголын зүүн хойд хэсэгт орших түүхэн нутаг. Хан Хэнтийн уулсын бүсийг хамардаг.",

        center:
        "Зүүн хойд Монгол",

        feature:
        "Хан Хэнтий",

        image:
        "https://loremflickr.com/900/600/mongolia,mountain",

        photos: [
            "https://loremflickr.com/600/400/mongolia,forest",
            "https://loremflickr.com/600/400/mongolia,mountain"
        ]
    },


    Khovd: {

        name: "Ховд",

        code: "ХО",

        description:
        "Монголын баруун хэсэгт орших олон ястны өлгий нутаг. Алтайн уулс, Их нууруудын хотгортой.",

        center:
        "Баруун Монгол",

        feature:
        "Алтайн уулс",

        image:
        "https://loremflickr.com/900/600/mongolia,altai",

        photos: [
            "https://loremflickr.com/600/400/mongolia,mountain",
            "https://loremflickr.com/600/400/mongolia,lake"
        ]
    },


    Khovsgol: {

        name: "Хөвсгөл",

        code: "ХӨ",

        description:
        "Хөвсгөл нуур, тайга, өндөр уулсаараа алдартай Монголын хойд хэсгийн аймаг.",

        center:
        "Хойд Монгол",

        feature:
        "Хөвсгөл нуур",

        image:
        "https://loremflickr.com/900/600/mongolia,lake",

        photos: [
            "https://loremflickr.com/600/400/mongolia,khuvsgul",
            "https://loremflickr.com/600/400/mongolia,lake"
        ]
    },


    Orkhon: {

        name: "Орхон",

        code: "ОР",

        description:
        "Монголын хойд хэсэгт орших аймаг бөгөөд Эрдэнэт хот аймгийн төв юм.",

        center:
        "Хойд Монгол",

        feature:
        "Эрдэнэт хот",

        image:
        "https://loremflickr.com/900/600/mongolia,city",

        photos: [
            "https://loremflickr.com/600/400/erdenet,mongolia",
            "https://loremflickr.com/600/400/mongolia,city"
        ]
    },


    Omnogovi: {

        name: "Өмнөговь",

        code: "ӨМ",

        description:
        "Монголын хамгийн өмнөд хэсэгт орших томоохон говийн аймаг. Говь гурван сайхан уулс болон Хонгорын элсээрээ алдартай.",

        center:
        "Өмнөд Монгол",

        feature:
        "Говь",

        image:
        "https://loremflickr.com/900/600/mongolia,gobi",

        photos: [
            "https://loremflickr.com/600/400/mongolia,gobi",
            "https://loremflickr.com/600/400/mongolia,sand"
        ]
    },


    Selenge: {

        name: "Сэлэнгэ",

        code: "СЭ",

        description:
        "Монголын хойд хэсгийн газар тариалангийн гол бүсүүдийн нэг.",

        center:
        "Хойд Монгол",

        feature:
        "Газар тариалан",

        image:
        "https://loremflickr.com/900/600/mongolia,river",

        photos: [
            "https://loremflickr.com/600/400/mongolia,river",
            "https://loremflickr.com/600/400/mongolia,forest"
        ]
    },


    Sukhbaatar: {

        name: "Сүхбаатар",

        code: "СҮ",

        description:
        "Монголын зүүн өмнөд хэсэгт орших өргөн уудам тал нутгийн аймаг.",

        center:
        "Зүүн өмнөд Монгол",

        feature:
        "Тал хээр",

        image:
        "https://loremflickr.com/900/600/mongolia,steppe",

        photos: [
            "https://loremflickr.com/600/400/mongolia,steppe",
            "https://loremflickr.com/600/400/mongolia,grassland"
        ]
    },


    Tov: {

        name: "Төв",

        code: "ТӨ",

        description:
        "Монгол Улсын төв хэсэгт орших бөгөөд Улаанбаатар хотоор хүрээлэгддэг.",

        center:
        "Монголын төв",

        feature:
        "Богд хан уул",

        image:
        "D:/kz/zurag/tov.jpg",

        photos: [
            "https://loremflickr.com/600/400/mongolia,forest",
            "https://loremflickr.com/600/400/mongolia,mountain"
        ]
    },


    Uvs: {

        name: "Увс",

        code: "УВ",

        description:
        "Монголын баруун хойд хэсэгт орших, Увс нуур болон Алтайн нурууны үзэсгэлэнт байгалиараа алдартай.",

        center:
        "Баруун хойд Монгол",

        feature:
        "Увс нуур",

        image:
        "https://loremflickr.com/900/600/mongolia,lake",

        photos: [
            "https://loremflickr.com/600/400/mongolia,lake",
            "https://loremflickr.com/600/400/mongolia,mountain"
        ]
    },


    Zavkhan: {

        name: "Завхан",

        code: "ЗА",

        description:
        "Монголын баруун хойд хэсэгт орших, уул нуруу, нуур, элсэн манхантай үзэсгэлэнт аймаг.",

        center:
        "Баруун хойд Монгол",

        feature:
        "Уул ба нуур",

        image:
        "https://loremflickr.com/900/600/mongolia,mountain",

        photos: [
            "https://loremflickr.com/600/400/mongolia,mountain",
            "https://loremflickr.com/600/400/mongolia,lake"
        ]
    },


    Ulaanbaatar: {

        name: "Улаанбаатар",

        code: "УБ",

        description:
        "Монгол Улсын нийслэл, улс төр, эдийн засаг, боловсрол, соёлын төв.",

        center:
        "Монголын төв",

        feature:
        "Нийслэл",

        image:
        "https://loremflickr.com/900/600/ulanbaatar,mongolia",

        photos: [
            "https://loremflickr.com/600/400/ulanbaatar,mongolia",
            "https://loremflickr.com/600/400/ulanbaatar,city"
        ]
    },


    /* ӨВӨРХАНГАЙ — НЭМЭВ */

    Uvurkhangai: {

        name: "Өвөрхангай",

        code: "ӨВ",

        description:
        "Монголын төвийн өмнөд хэсэгт орших, Хангайн нуруу болон говийн бүсийн заагт байрладаг аймаг.",

        center:
        "Төвийн өмнөд Монгол",

        feature:
        "Орхоны хөндий",

        image:
        "https://loremflickr.com/900/600/mongolia,khangai",

        photos: [
            "https://loremflickr.com/600/400/mongolia,khangai",
            "https://loremflickr.com/600/400/mongolia,orkhon"
        ]
    }

};


/* =====================================
   PLACE DATA
   Энд өөрийн очих газруудаа нэмнэ.
===================================== */

const placeData = {

    Tov: [

        {
            name: "Манзуширын хийд",
            location: "Зуунмод, Төв аймаг",
            description: "Богдхан уулын энгэрт XVIII зуунд байгуулагдсан эртний хийдийн үлдэгдэл, хадан дээрх сийлбэр бурхад, байгалийн музей бүхий аялал жуулчлалын гол цэг.",
            photos: [
                "D:/kz/zurag/tov.jpg",
                "ЭНД_2_ЗУРГИЙН_URL"
            ]
        },

        {
            name: "Богд хан уул",
            location: "Зуунмод, Төв аймаг",
            description: "Дэлхийн хамгийн анхны дархан цаазат уулсын нэг (1778 онд дархалсан). Цэцээ гүн, Цайз зэрэг оргилуудтай, шинсэн ой, хад асга, булаг шандтай.",
            photos: [
                "ЭНД_1_ЗУРГИЙН_URL",
                "ЭНД_2_ЗУРГИЙН_URL"
            ]
        },
        {
            name: "Горхи-Тэрэлжийн байгалийн цогцолборт газар",
            location: "Эрдэнэ сум, Төв аймаг",
            description: "Гранит боржин чулуун сонин содон тогтоц бүхий хад асга (Мэлхий хад, Зааны хад гэх мэт), нарсан ой, Тэрэлж ба Туул голын хослол. Морь унах, явган аялал хийх, АриPoint/Арибал бясалгалын хийдэд зочлох болон амралтын баазуудад амрахад нэн тохиромжтой.",
            photos: [
                "ЭНД_1_ЗУРГИЙН_URL",
                "ЭНД_2_ЗУРГИЙН_URL"
            ]
        },
        {
            name: "Цонжин Болдог Цогцолбор",
            location: "Эрдэнэ сум, Төв аймаг",
            description: "Эзэн Чингис хаан алтан ташуур олсон гэх түүхэн газарт босгосон 40 метр өндөр, дэлхийд хамгийн томд тооцогдох морьт хөшөө. Морьт хөшөөний морины дэлэн дээр гарч эргэн тойрноо тольдох боломжтой бөгөөд дотроо эзэнт гүрний үеийн музейтэй.",
            photos: [
                "ЭНД_1_ЗУРГИЙН_URL",
                "ЭНД_2_ЗУРГИЙН_URL"
            ]
        },
        {
            name: "Хустайн байгалийн цогцолборт газар",
            location: "Алтанбулаг, Аргалант сум, Төв аймаг",
            description: "Дэлхийд ховордсон байгалийн унаган Тахь (Пржевальскийн морь)-г сэргээн нутагшуулсан олон улсын ач холбогдолтой БЦГ. Тахь, Буга, Аргаль ажиглах, эко-аялал хийх ба эртний Хөшөө цайдмын дөрвөлжин булш, хүн чулуудыг үзэх боломжтой.",
            photos: [
                "ЭНД_1_ЗУРГИЙН_URL",
                "ЭНД_2_ЗУРГИЙН_URL"
            ]
        },
        {
            name: "Заамар ба Туул голын сав газар",
            location: "Алтанбулаг, Аргалант сум, Төв аймаг",
            description: "Туул, Хараа, Ерөө голуудын эх авдаг уулс, хавцлуудаас бүрдэх бөгөөд каноэ, завиараа аялах, загасчлах, агаар салхинд гарахад хамгийн ойр тохиромжтой.",
            photos: [
                "ЭНД_1_ЗУРГИЙН_URL",
                "ЭНД_2_ЗУРГИЙН_URL"
            ]
        },
        {
            name: "Тоньюкукын гэрэлт хөшөө ",
            location: "Баян сум, Төв аймаг",
            description: "Эртний Түрэгийн эзэнт гүрний мэргэн сайд Тоньюкукт зориулсан руни бичээс бүхий ховор дурсгал.",
            photos: [
                "ЭНД_1_ЗУРГИЙН_URL",
                "ЭНД_2_ЗУРГИЙН_URL"
            ]
        },
        {
            name: "Зоргол хайрхан уул",
            location: "Баян-Өнжүүл сум, Төв аймаг",
            description: "Говь хээрийн бүсийн заагт орших, боржин чулуун сүрлэг Зоргол хайрхан уул.",
            photos: [
                "ЭНД_1_ЗУРГИЙН_URL",
                "ЭНД_2_ЗУРГИЙН_URL"
            ]
        }
    ]

};


/* =====================================
   NAME CONVERTER
===================================== */

const nameMap = {

    "Arkhangai":
        "Arkhangai",

    "Bayankhongor":
        "Bayankhongor",

    "Bayan-Olgii":
        "BayanOlgii",

    "Bayan-Ulgii":
        "BayanOlgii",

    "BayanOlgii":
        "BayanOlgii",

    "Bulgan":
        "Bulgan",

    "Darkhan-Uul":
        "DarkhanUul",

    "Darkhan":
        "DarkhanUul",

    "Dornod":
        "Dornod",

    "Dornogovi":
        "Dornogovi",

    "Dundgovi":
        "Dundgovi",

    "Govi-Altai":
        "GoviAltai",

    "Govisumber":
        "Govisumber",

    "Khentii":
        "Khentii",

    "Khovd":
        "Khovd",

    "Khovsgol":
        "Khovsgol",

    "Khuvsgul":
        "Khovsgol",

    "Orkhon":
        "Orkhon",

    "Omnogovi":
        "Omnogovi",

    "Umnugovi":
        "Omnogovi",

    "Selenge":
        "Selenge",

    "Sukhbaatar":
        "Sukhbaatar",

    "Tov":
        "Tov",

    "Töv":
        "Tov",

    "Tuv":
        "Tov",

    "Төв":
        "Tov",

    "Uvurkhangai":
        "Uvurkhangai",

    "Uvs":
        "Uvs",

    "Zavkhan":
        "Zavkhan",

    "Ulaanbaatar":
        "Ulaanbaatar"
};


/* =====================================
   VISITED
===================================== */

let visited = JSON.parse(
    localStorage.getItem("visitedProvinces") || "[]"
);

updateCount();


/* =====================================
   LOAD GEOJSON
===================================== */

fetch(GEOJSON_URL)

.then(response => {

    if (!response.ok) {
        throw new Error("GeoJSON ачааллахад алдаа гарлаа");
    }

    return response.json();
})

.then(data => {

    const geoLayer =
        L.geoJSON(
            data,
            {

                style: function() {

                    return {

                        className:
                            "province",

                        fillColor:
                            "#bdbdbd",

                        fillOpacity:
                            1,

                        color:
                            "#ffffff",

                        weight:
                            2
                    };
                },


                onEachFeature:
                function(feature, layer) {

                    let originalName =
                        feature.properties.prefecture
                        ||
                        feature.properties.name
                        ||
                        feature.properties.NAME
                        ||
                        feature.properties.NAME_1;


                    let cleanName =
                        String(originalName || "")
                            .trim();

                    let key =
                        nameMap[cleanName]
                        ||
                        nameMap[cleanName.toLowerCase()]
                        ||
                        cleanName;

                    /*
                       Төв аймаг GeoJSON дээр
                       Töv / Tov / Tuv / Төв
                       хэлбэрээр ирсэн ч ажиллана.
                    */

                    if (
                        cleanName === "Töv"
                        ||
                        cleanName === "Tov"
                        ||
                        cleanName === "Tuv"
                        ||
                        cleanName === "Төв"
                    ) {
                        key = "Tov";
                    }


                    layer.on(
                        "click",
                        function() {

                            selectProvince(
                                key,
                                layer
                            );

                        }
                    );

                }

            }
        )
        .addTo(map);


    map.fitBounds(
        geoLayer.getBounds(),
        {
            padding: [
                20,
                20
            ]
        }
    );

})

.catch(error => {

    console.error(
        "GeoJSON Error:",
        error
    );

});


/* =====================================
   SELECT PROVINCE
===================================== */

function selectProvince(
    key,
    layer
) {

    /*
       Өмнөх сонголтыг арилгах
    */

    document
        .querySelectorAll(".province")
        .forEach(el => {
            el.classList.remove(
                "selected"
            );
        });


    /*
       Одоогийн сонголтыг цэнхэр болгоно
    */

    if (layer.getElement()) {

        layer
            .getElement()
            .classList.add(
                "selected"
            );
    }


    /*
       Data
    */

    const info =
        provinceInfo[key];


    if (!info) {

        console.warn(
            "Province data олдсонгүй:",
            key
        );

        return;
    }


    /*
       Save visited
    */

    if (!visited.includes(key)) {

        visited.push(key);

        localStorage.setItem(
            "visitedProvinces",
            JSON.stringify(
                visited
            )
        );

    }


    updateCount();


    /*
       Quick information
    */

    document.getElementById(
        "provinceName"
    ).innerText =
        info.name;


    document.getElementById(
        "provinceDescription"
    ).innerText =
        info.description;


    document.getElementById(
        "provinceCode"
    ).innerText =
        info.code;


    document.getElementById(
        "infoBox"
    ).classList.add(
        "show"
    );


    /*
       Detail
    */

    showProvinceDetail(
        info,
        key
    );
}
/* =====================================
   COUNT
===================================== */

function updateCount() {

    document.getElementById(
        "visitedCount"
    ).innerText =
        "#" + visited.length;
}


/* =====================================
   DETAIL PAGE
===================================== */

function showProvinceDetail(
    info,
    provinceKey
) {

    const content =
        document.getElementById(
            "content"
        );


    const places =
        placeData[provinceKey] || [];


    content.innerHTML = `

        <div class="province-detail">

            <img
                class="detail-image"
                src="${info.image}"
                alt="${info.name}"
            >

            <div class="detail-title">
                ${info.name}
            </div>

            <div class="detail-subtitle">
                Аялсан аймаг ✓
            </div>

            <div class="detail-text">
                ${info.description}
            </div>

            <div class="detail-grid">

                <div class="detail-box">

                    <div class="detail-box-title">
                        Байршил
                    </div>

                    <div class="detail-box-value">
                        ${info.center}
                    </div>

                </div>


                <div class="detail-box">

                    <div class="detail-box-title">
                        Онцлог
                    </div>

                    <div class="detail-box-value">
                        ${info.feature}
                    </div>

                </div>

            </div>


            <div class="places-section" style="margin-top:24px;">

                <div
                    class="places-title"
                    style="font-size:20px;font-weight:700;margin-bottom:10px;"
                >
                    Очих газрууд
                </div>

                <select
                    id="placeSelect"
                    class="place-select"
                    style="width:100%;padding:12px 14px;border:1px solid #ddd;border-radius:12px;background:#fff;font-size:15px;"
                >

                    <option value="">
                        Очих газраа сонгоно уу
                    </option>

                    ${places.map(
                        (place, index) => `
                        <option value="${index}">
                            ${place.name}
                        </option>
                    `
                    ).join("")}

                </select>

                <div
                    id="placeDetail"
                    class="place-detail"
                    style="margin-top:16px;"
                ></div>

            </div>


            <div class="photo-title">
                Зураг
            </div>


            <div class="photo-grid">

                ${info.photos.map(
                    photo => `

                    <img
                        src="${photo}"
                        alt="${info.name}"
                    >

                    `
                ).join("")}

            </div>

        </div>

    `;


    const placeSelect =
        document.getElementById(
            "placeSelect"
        );


    if (placeSelect) {

        placeSelect.addEventListener(
            "change",
            function() {

                const index =
                    this.value;


                if (index === "") {

                    document.getElementById(
                        "placeDetail"
                    ).innerHTML = "";

                    return;
                }


                showPlaceDetail(
                    places[Number(index)]
                );

            }
        );

    }


    setTimeout(() => {

        content.scrollIntoView({
            behavior: "smooth"
        });

    }, 100);
}


/* =====================================
   PLACE DETAIL
   Жижиг Leaflet map / Google Maps байхгүй.
===================================== */

function showPlaceDetail(
    place
) {

    const detail =
        document.getElementById(
            "placeDetail"
        );


    if (!detail || !place) {
        return;
    }


    const photos =
        Array.isArray(place.photos)
            ? place.photos.slice(0, 2)
            : [];


    detail.innerHTML = `

        <div
            class="place-info"
            style="padding:16px;border-radius:16px;background:#f7f7f7;"
        >

            <div
                class="place-name"
                style="font-size:18px;font-weight:700;margin-bottom:6px;"
            >
                ${place.name || ""}
            </div>

            <div
                class="place-location"
                style="font-size:14px;color:#666;margin-bottom:10px;"
            >
                📍 ${place.location || ""}
            </div>

            <div
                class="place-description"
                style="font-size:14px;line-height:1.6;"
            >
                ${place.description || ""}
            </div>

        </div>


        ${
            photos.length
                ? `

            <div
                style="margin-top:16px;font-size:18px;font-weight:700;"
            >
                Зураг
            </div>

            <div
                class="place-photo-grid"
                style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:10px;"
            >

                ${photos.map(
                    photo => `

                    <img
                        src="${photo}"
                        alt="${place.name || ""}"
                        style="width:100%;height:160px;object-fit:cover;border-radius:14px;"
                    >

                    `
                ).join("")}

            </div>

            `
                : ""
        }

    `;
}


/* =====================================
   CLOSE INFO
===================================== */

function closeInfo() {

    document
        .getElementById(
            "infoBox"
        )
        .classList.remove(
            "show"
        );


    /*
       Close хийхэд одоогийн сонголтыг
       хэвээр үлдээнэ. Дараагийн аймаг
       дарахад өмнөх нь саарал болно.
    */

}


/* =====================================
   SHOW MAP
===================================== */

function showMap() {

    document
        .getElementById(
            "mapNav"
        )
        .classList.add(
            "active"
        );


    document
        .getElementById(
            "aboutNav"
        )
        .classList.remove(
            "active"
        );


    document
        .getElementById(
            "mapSection"
        )
        .style.display =
        "block";


    document
        .getElementById(
            "countryRow"
        )
        .style.display =
        "flex";


    document
        .getElementById(
            "content"
        )
        .innerHTML =
        "";


    map.invalidateSize();
}


/* =====================================
   ABOUT
===================================== */

function showAbout() {

    document
        .getElementById(
            "aboutNav"
        )
        .classList.add(
            "active"
        );


    document
        .getElementById(
            "mapNav"
        )
        .classList.remove(
            "active"
        );


    document
        .getElementById(
            "mapSection"
        )
        .style.display =
        "none";


    document
        .getElementById(
            "countryRow"
        )
        .style.display =
        "none";


    document
        .getElementById(
            "content"
        )
        .innerHTML = `

            <div class="about-page">

                <div class="about-logo">
                    O
                </div>


                <div class="about-title">
                    Отис
                </div>


                <div class="about-subtitle">
                    Аялсан аймгууд
                </div>


                <div class="about-description">

                    Монгол Улсын аймаг,
                    байгаль, аяллын талаарх
                    мэдээллийг нэг дороос
                    харах зориулалттай аппликейшн.

                </div>


                <div class="about-card">

                    <h3>
                        Бидний тухай
                    </h3>


                    <p>

                        Монгол орны үзэсгэлэнт
                        аймаг бүрийн мэдээлэл,
                        зураг болон аялсан газруудаа
                        тэмдэглэх боломжтой.

                    </p>

                </div>

            </div>

        `;
}