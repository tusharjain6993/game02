export var menubar=["CATEGORIES","UPCOMINGGAMES"/* , "LOGIN","REGISTER" */]
export var logo=[require('../img/img1.jpg')]
export var logo1=[require('../img/img2.jpg')]
export var bannerpics = [ require('../img/god1.jpg'), require('../img/ghost.jpg'), require('../img/car.jpg'), require('../img/cyber.jpg'), require('../img/nfs.jpg')]
export var bannerpics1 = [ require('../img/god1.jpg'), require('../img/ghost.jpg'), require('../img/fifa.jpg'), require('../img/nfs.jpg')]
export var bannerpics2=[require('../img/forza3.jpg'),require('../img/street4.jpg'),require('../img/devil3.jpg'),require('../img/valhalla5.jpg'),]
export var modeofpay = [require('../img/mast1.jpg')]
export var modeofpay1 = [require('../img/visa1.jpg')]
export var modeofpay2=[require('../img/paytm.jpg')]
export var modeofpay3=[require('../img/googlepay.png')]

export var games = [
    {
        id: 1,
        name: 'Need For Speed Hot Pursuit Remastered',
        OperatingSystem: "Windows 7/8/8.1/10",
        CPU: " i3 processor or higher",
        RAM: "RAM: 2GB",
        SetupSize: "SetupSize: 3.2gb",
        HardDiskSpace: "HardDiskSpace: 7.2gb",
        image: require('../img/nfs1.jpg'),
        HDD: '7.2 GB (up to 10 GB during installation)',
        Install: '4-8 minutes',
        Basedon: 'Switch release with Update v196608 installed over (v1.0.3): 7 GB',
        Language: ' can be changed in Yuzu game settings (RMB on a game -> Properties -> System -> Language)',
        RAM1: 'At least 2 GB of free RAM (inc. virtual) required for installing this repack',
        img:[require('../img/nfs/nfs1.jpg'),require('../img/nfs/nfs2.jpg'),require('../img/nfs/nfs3.jpg'),require('../img/nfs/nfs4.jpg')],
            
        Price: '1000'
    },
    
    {
        id: 2,
        name: 'ASSASSIN CREED: ODYSSEY',
        OperatingSystem: "Windows 7/8/8.1/10",
        CPU: " i3 processor or higher",
        RAM: "RAM: 2GB",
        SetupSize: "SetupSize: 35.2gb",
        HardDiskSpace: " HardDiskSpace: 112gb",
        image: require('../img/assas.jpg'),
        Basedon: ' Uplay v1.5.3 rip with all languages: 112 GB',
        GameVersion: ' v1.5.3, all DLCs are included and activated (except some uPlay rewards)',
        Install: ' ~1.5 hours on 8-threads CPU; ~3 hours on 4-threads CPU for any single language',
        HDD: 'up to 112 GB',
        Language: 'can be changed in game settings',
        RAM1: 'At least 4 GB of free RAM (inc. virtual) required for installing this repack',
        img:[require('../img/assasin/assas1.jpg'),require('../img/assasin/assas2.jpg'),require('../img/assasin/assas3.jpg'),require('../img/assasin/assas4.jpg')],
       
        Price: '1500'

    },
    
    {
        id: 3,
        name: 'GOD OF WAR ',
        OperatingSystem: "Windows 7/8/8.1/10",
        CPU: " i5 processor or higher",
        RAM: "RAM: 8GB",
        HardDiskSpace: " HardDiskSpace: 64.4 GB",
        SetupSize: "SetupSize:  26 GB",
        Install: 'Installation takes 7-25 minutes (depending on your system and selected components)',
        HDD: 'HDD space after installation: up to 64.5 GB',
        DLC: 'All released DLCs included and activated',
        img:[require('../img/actionadventure/god.jpg'),require('../img/actionadventure/god1.jpg'),],
        image: require('../img/actionadventure/god.jpg'),
        Language: 'Language can be changed in game settings',
        Price: '3000'
    },
    {

        id: 4,
        name: 'THE WITCHER 3: WILD HUNT ',
        OperatingSystem: "Windows 7/8/8.1/10",
        CPU: " i3 processor or higher",
        RAM: "RAM: 8GB",
        HardDiskSpace: " HardDiskSpace: 83.7 GB",
        SetupSize: "SetupSize:  31.7 GB ",
        Install: 'Installation takes from 18 minutes (on 24-threads CPU) up to 1 hour (on 4-threads CPU',
        HDD: 'HDD space after installation: up to 88.5 GB',
        DLC: 'Game version: v4.00 (Next-Gen Update), all DLCs are included and activated',
        img:[require('../img/actionadventure/witcher1.jpg'),require('../img/actionadventure/witcher2.jpg'),require('../img/actionadventure/witcher3.jpg'),require('../img/actionadventure/witcher4.jpg')],
        image: require('../img/actionadventure/witcher6.jpg'),
        Language: 'Language can be changed in game settings',
        Price: '400'
    },
    {
        id:5,
        name: 'CALL OF DUTY: GHOST ',
        OperatingSystem: "Windows 7/8/8.1/10",
        CPU: " i3 processor or higher",
        RAM: "RAM: 2GB",
        SetupSize: "SetupSize: 37.4 GB ",
        HardDiskSpace: " HardDiskSpace: 65 GB",
        image: require('../img/shooting/ghost.jpg'),
        Basedon: '',
        GameVersion: ' v1.5.3, all DLCs are included and activated (except some uPlay rewards)',
        Install: 'Installation takes (for any single audio language): ~13 minutes on 16-threads CPU; ~22 minutes on 8-threads CPU; ~40 minutes on 4-threads CPU',
        HDD: 'HDD space after installation: 65 GB (71 GB during installation)',
        Language: 'Use REG-file in “_Language Switcher” folder to switch the game language',
        RAM1: 'At least 2 GB of free RAM (inc. virtual) required for installing this repack',
        img:[require('../img/shooting/ghost.jpg'),require('../img/shooting/ghost1.jpg'),require('../img/shooting/ghost2.jpg')],
        Price: '1200'
    },
    {
        id:6,
        name: 'CALL OF DUTY: INFINITE WARFARE ',
        OperatingSystem: "Windows 7/8/8.1/10",
        CPU: " i3 processor or higher",
        RAM: "RAM: 2GB",
        SetupSize: "SetupSize: 37.7 GB ",
        HardDiskSpace: " HardDiskSpace: 94.8 GB",
        image: require('../img/shooting/infinite 1.jpg'),
        Basedon: '',
        GameVersion: ' v1.5.3, all DLCs are included and activated (except some uPlay rewards)',
        Install: 'Installation takes 1.5-2.5 hours (depending on your system and selected components)',
        HDD: 'HDD space after installation: 62~67 GB (~71 GB during installation)',
        Language: 'Use REG-file in “_Language Switcher” folder to switch the game language',
        RAM1: 'At least 2 GB of free RAM (inc. virtual) required for installing this repack',
        img:[require('../img/shooting/infinite 1.jpg'),require('../img/shooting/infinite 2.jpg'),require('../img/shooting/infinite 3.jpg')],
        Price: '900'

    },  
]

export var games1=
[
    {
        id:1,
        name:'FORZA HORIZON 5: PREMIUM EDITION',
        OperatingSystem: "Windows 7/8/8.1/10",
        CPU: " i3 8th gen processor or higher",
        RAM: "RAM: 8 GB",
        SetupSize: "SetupSize: 67.1 GB ",
        HardDiskSpace: " HardDiskSpace: 160.2 GB",
        Basedon: 'Based on Steam release BuildID 10876356: 160.2 GB, thanks to Carfixer for files!',
        GameVersion: ' v1.573.834.0; 44 released DLCs are included and activated',
        Install: 'Installation takes (any single language, no optional videos): from ~45 minutes (on 24-threads CPU) up to ~2 hours (4-threads CPU)',
        HDD: 'HDD space after installation: up to 160.2 GB',
        Language: 'Language can be changed in game settings',
        RAM1: 'At least 8 GB of free RAM (inc. virtual) required for installing this repack',
        image: require('../img/forza5.jpg'),
        img:[require('../img/forza.jpg'),require('../img/forza1.jpg'),require('../img/forza2.jpg'),require('../img/forza3.jpg'),],
        Price: '500'

    },
    {
        id:2,
        name:'DEVIL MAY CRY 5: DELUXE EDITION ',
        OperatingSystem: "Windows 7/8/8.1/10",
        CPU: " i3 8th gen processor or higher",
        RAM: "RAM: 8 GB",
        SetupSize: "SetupSize: 22.5 GB ",
        HardDiskSpace: " HardDiskSpace: 39.7 GB",
        Basedon: 'Based on Devil.May.Cry.5.Vergil-CODEX ISO release: codex-devil.may.cry.5.vergil.iso ',
        GameVersion: ' Game version: v12152020/5962864',
        Install: 'Installation takes: ~15 minutes on 8-threads CPU; ~30 minutes on 4-threads CPU',
        HDD: 'HDD space after installation: up to 40 GB',
        Language: 'Language Selector.exe” in game root to change the game language; subtitles and VOs can be changed separately in game settings',
        RAM1: 'At least 8 GB of free RAM (inc. virtual) required for installing this repack',
        image: require('../img/devil3.jpg'),
        img:[require('../img/devil1.jpg'),require('../img/devil2.jpg'),require('../img/devil3.jpg'),require('../img/devil4.jpg'),],
        Price: '1500'
    },
    {
        id:3,
        name:'RED DEAD REDEMPTION 2',
        OperatingSystem: "Windows 10",
        CPU: " i3 8th gen processor or higher",
        RAM: "RAM: 12 GB",
        SetupSize: "SetupSize:  66.3 GB ",
        HardDiskSpace: " HardDiskSpace: 113.7 GB",
        Basedon: 'Based on Red.Dead.Redemption.2.-EMPRESS+Mr_Goldberg ISO release: emp-rdr2',
        GameVersion: ' Game version is Build 1311.23',
        Install: 'Installation takes: ~1 hour 40 minutes on 16-threads CPU; ~3 hour 10 minutes on 8-threads CPU; ~5 hours 4-threads CPU',
        HDD: 'HDD space after installation: 117 GB',
        Language: 'Language is automatically set by detecting your system locale',
        RAM1: 'At least 8 GB of free RAM (inc. virtual) required for installing this repack',
        image: require('../img/red.jpg'),
        img:[require('../img/red1.jpg'),require('../img/red2.jpg'),require('../img/red3.jpg'),require('../img/red4.jpg'),],
        Price: '3000'
    },
    {
        id:4,
        name:'TEKKEN 7: Ultimate Edition',
        OperatingSystem: "Windows 10",
        CPU: " i3 3th gen processor or higher",
        RAM: "RAM: 8 GB",
        SetupSize: "SetupSize:  15.3 GB GB ",
        HardDiskSpace: " HardDiskSpace: 49.4 GB",
        Basedon: 'Based on TEKKEN.7.Season.Pass.4.REPACK-CODEX ISO release: codex-tekken.7.season.pass.4.repack.iso',
        GameVersion: ' All released DLCs are included and activated; game version is: v4.22',
        Install: 'Installation takes 10-30 minutes (depending on your system and selected components)',
        HDD: 'HDD space after installation: up to 79.4 GB',
        Language: 'Language is automatically set by detecting your system locale',
        RAM1: 'At least 8 GB of free RAM (inc. virtual) required for installing this repack',
        image: require('../img/tekken2.jpg'),
        img:[require('../img/tekken1.jpg'),require('../img/tekken3.jpg'),require('../img/tekken4.jpg')],
        Price: '100'
    },
    {
        id:4,
        name:'CYBERPUNK 2077 ',
        OperatingSystem: "Windows 10",
        CPU: " i3 8th gen processor or higher",
        RAM: "RAM: 8 GB",
        SetupSize: "SetupSize:  35.4 GB ",
        HardDiskSpace: " HardDiskSpace: 112.8 GB",
        Basedon: 'Based on Steam BuildID 9440430 release: 112.4 GB, thanks to Cyberpunker2077!',
        GameVersion: ' Game version is v1.6; 18 free DLCs and REDmod modding tools are included',
        Install: 'Installation takes (one language, no credits, no bonus content): ~45 minutes on 16-threads CPU; ~1 hour 20 minutes on 8-threads CPU; ~2 hours 20 minutes on 4-threads CPU',
        HDD: 'HDD space after installation: up to 112.8 GB',
        Language: 'Language can be changed in game settings',
        RAM1: 'At least 8 GB of free RAM (inc. virtual) required for installing this repack',
        image: require('../img/cyber4.jpg'),
        img:[require('../img/cyber1.jpg'),require('../img/cyber2.jpg'),require('../img/cyber3.jpg'),require('../img/cyber5.jpg')],
        Price: '2999'
    },
    {
        id:5,
        name:'Marvel Spider-Man Remastered ',
        OperatingSystem: "Windows 10",
        CPU: " i3 8th gen processor or higher",
        RAM: "RAM: 8 GB",
        SetupSize: "SetupSize:  37.6 GB  ",
        HardDiskSpace: " HardDiskSpace: 78.3 GB",
        Basedon: 'Based on Steam BuildID 9304506 MULTi21 release: 78.3 GB, thanks to Crimechaser!',
        GameVersion: ' Game version: v1.812.1.0; Pre-purchase Entitlements (DLC) is included and activated',
        Install: 'Installation takes 12-35 minutes (depending on your system and selected components)',
        HDD: 'HDD space after installation: up to 78.3 GB',
        Language: 'GUI/text language can be changed in game settings',
        RAM1: 'At least 8 GB of free RAM (inc. virtual) required for installing this repack',
        image: require('../img/spider1.jpg'),
        img:[require('../img/spider2.jpg'),require('../img/spider3.jpg'),require('../img/spider4.jpg'),require('../img/spider5.jpg')],
        Price: '2999'
    }
]





export var upcominginfo=[
    {
        id:1,
        OperatingSystem: "64-bit Windows 10",
        CPU: "Intel Core i7-8700 (3.2Ghz) or AMD Ryzen 5 3600 (3.6 Ghz)",
        RAM: "16 GB ",
        GraphicCard:'NVIDIA GeForce 1080 Ti or AMD Radeon RX 5700 XT or INTEL Arc A770 8 GB',
        name:'HOGWARTS LEGACY',
        HardDiskSpace:'91 GB available space',
        SetupSize:'40 GB',
        Install:'it ll only take 5-20 minutes for the game to unpack.',
        DirectX:'Version 12',
        image: require('../img/harry.jpg'),
        img:[require('../img/harry1.jpg'),require('../img/harry2.jpg'),require('../img/harry3.jpg'),require('../img/harry4.jpg')],
        Price:'2999'
},
{
        name:'Resident Evil 4 ',
        id:2,
        OperatingSystem: "64-bit Windows 10",
        CPU: "Intel Core i7-8700 or Ryzen 5 3600",
        RAM: "16 GB ",
        GraphicCard:'NVIDIA GeForce GTX 1070 or Radeon RX 5700',
        HardDiskSpace:'50 GB available space',
        SetupSize:'40 GB',
        Install:'it ll only take 5-20 minutes for the game to unpack.',
        DirectX:'Version 12',
        image: require('../img/resi.jpg'),
        img:[require('../img/resi1.jpg'),require('../img/resi2.jpg'),require('../img/resi3.jpg')],
        
        Price:'2000'
},
{
        name:'THE LAST OF US PART - 1 ',
        id:3,
        OperatingSystem: "64-bit Windows 10",
        CPU: "AMD Ryzen 5 3600X, Intel Core i7-8700",
        RAM: "16 GB ",
        GraphicCard:'AMD Radeon RX 5700 XT (8 GB), AMD Radeon RX 6600 XT (8 GB), NVIDIA GeForce RTX 2070 SUPER (8 GB), NVIDIA GeForce RTX 3060 (8 GB)',
        HardDiskSpace:'100 GB available space',
        SetupSize:'40 GB',
        Install:'it ll only take 5-20 minutes for the game to unpack.',
        DirectX:'Version 12',
        image: require('../img/last3.jpg'),
        img:[require('../img/last2.jpg'),require('../img/last1.jpg'),require('../img/last4.jpg'),require('../img/last.jpg')],
        Price:'1999'
},
{
        name:'THE LAST OF US PART - 1 ',
        id:3,
        OperatingSystem: "64-bit Windows 10",
        CPU: "Processor: AMD Ryzen 7 1700 - 3.0 Ghz / INTEL i7-6700 3.4 Ghz",
        RAM: "RAM: 8 GB (Dual-channel mode) ",
        GraphicCard:'Video Card: AMD Vega 64 - 8GB / GeForce GTX 1080- 8GB',
        HardDiskSpace:' 160 GB available space',
        SetupSize:'100 GB',
        Install:'it ll only take 5-20 minutes for the game to unpack.',
        DirectX:'Version 12',
        image: require('../img/valhalla4.jpg'),
        img:[require('../img/valhalla.jpg'),require('../img/valhalla2.jpg'),require('../img/valhalla1.jpg'),require('../img/valhalla3.jpg'),require('../img/valhalla4.jpg'),,require('../img/valhalla5.jpg')],
        Price:'1499'
}
]

export var categorymenubar1 =["SHOOTING","RACING","SPORTS","ActionAdventure","FIGHTING"]

export var categoryimages=
    [
    require('../img/god1.jpg'), require('../img/ghost1.jpg'),require('../img/cyber.jpg'), require('../img/nfs.jpg')
        
    ]


export var actionadventureinfo =
    [
        {
            id: 1,
            name: 'BATMAN: ARKHAM KNIGHT PREMIUM EDITION',
            OperatingSystem: "Windows 7/8/8.1/10",
            CPU: " i3 processor or higher",
            RAM: "RAM: 2GB",
            HardDiskSpace: " HardDiskSpace: 67.6 GB",
            SetupSize: "SetupSize: 26.9gb",
            Install: '40-90 minutes (depending on your system',
            HDD: 'after installation: 52~68 GB (depending on selected languages)',
            DLC: 'All released DLCs included and activated',
            img:[require('../img/actionadventure/bat1.jpg'),require('../img/actionadventure/bat2.jpg'),require('../img/actionadventure/bat3.jpg'),require('../img/actionadventure/bat4.jpg')],
            image: require('../img/actionadventure/bat1.jpg'),
            Price: '200'
        },
        {
            id: 2,
            name: 'GOD OF WAR ',
            OperatingSystem: "Windows 7/8/8.1/10",
            CPU: " i5 processor or higher",
            RAM: "RAM: 8GB",
            HardDiskSpace: " HardDiskSpace: 64.4 GB",
            SetupSize: "SetupSize:  26 GB",
            Install: 'Installation takes 7-25 minutes (depending on your system and selected components)',
            HDD: 'HDD space after installation: up to 64.5 GB',
            DLC: 'All released DLCs included and activated',
            img:[require('../img/actionadventure/god.jpg'),require('../img/actionadventure/god1.jpg'),],
            image: require('../img/actionadventure/god.jpg'),
            Language: 'Language can be changed in game settings',
            Price: '2000'
        },
        {

            id: 3,
            name: 'THE WITCHER 3: WILD HUNT ',
            OperatingSystem: "Windows 7/8/8.1/10",
            CPU: " i3 processor or higher",
            RAM: "RAM: 8GB",
            HardDiskSpace: " HardDiskSpace: 83.7 GB",
            SetupSize: "SetupSize:  31.7 GB ",
            Install: 'Installation takes from 18 minutes (on 24-threads CPU) up to 1 hour (on 4-threads CPU',
            HDD: 'HDD space after installation: up to 88.5 GB',
            DLC:'Game version: v4.00 (Next-Gen Update), all DLCs are included and activated',
            img:[require('../img/actionadventure/witcher1.jpg'),require('../img/actionadventure/witcher2.jpg'),require('../img/actionadventure/witcher3.jpg'),require('../img/actionadventure/witcher4.jpg')],
            image: require('../img/actionadventure/witcher6.jpg'),
            Language: 'Language can be changed in game settings',
            Price: '200'
        },
        {
            id: 4,
            name: 'GRAND THEFT AUTO V ',
            OperatingSystem: "Windows 7/8/8.1/10",
            CPU: " i3 processor or higher",
            RAM: "RAM: 8GB",
            HardDiskSpace: " HardDiskSpace: 108.3 GB",
            SetupSize: "SetupSize:  47.5 GB ",
            Install: 'Installation takes from ~40 minutes on 16-threads CPU + SSD up to 2 hours 45 minutes on 4-threads CPU + HDD',
            HDD: 'HDD space after installation: 108.3 GB',
            DLC: 'Game version: v4.00 (Next-Gen Update), all DLCs are included and activated',
            img:[require('../img/actionadventure/gta1.jpg'),require('../img/actionadventure/gta2.jpg'),require('../img/actionadventure/gta3.jpg'),require('../img/actionadventure/gta4.jpg')],    
            image: require('../img/actionadventure/gta3.jpg'),
            Language: 'Language can be changed in game settings',
            Price: '1200'
        },
        {
            id: 5,
            name: 'ASSASSIN CREED: ODYSSEY',
            OperatingSystem: "Windows 7/8/8.1/10",
            CPU: " i3 processor or higher",
            RAM: "RAM: 2GB",
            SetupSize: "SetupSize: 35.2gb",
            HardDiskSpace: " HardDiskSpace: 112gb",
            image: require('../img/assa.jpg'),
            Basedon: ' Uplay v1.5.3 rip with all languages: 112 GB',
            GameVersion: ' v1.5.3, all DLCs are included and activated (except some uPlay rewards)',
            Install: ' ~1.5 hours on 8-threads CPU; ~3 hours on 4-threads CPU for any single language',
            HDD: 'up to 112 GB',
            Language: 'can be changed in game settings',
            RAM1: 'At least 4 GB of free RAM (inc. virtual) required for installing this repack',
            img:[require('../img/assasin/assas1.jpg'),require('../img/assasin/assas2.jpg'),require('../img/assasin/assas3.jpg'),require('../img/assasin/assas4.jpg')],    
            Price: '500'

        },
        {
            id:6,
            name:'CYBERPUNK 2077 ',
        OperatingSystem: "Windows 10",
        CPU: " i3 8th gen processor or higher",
        RAM: "RAM: 8 GB",
        SetupSize: "SetupSize:  35.4 GB ",
        HardDiskSpace: " HardDiskSpace: 112.8 GB",
        Basedon: 'Based on Steam BuildID 9440430 release: 112.4 GB, thanks to Cyberpunker2077!',
        GameVersion: ' Game version is v1.6; 18 free DLCs and REDmod modding tools are included',
        Install: 'Installation takes (one language, no credits, no bonus content): ~45 minutes on 16-threads CPU; ~1 hour 20 minutes on 8-threads CPU; ~2 hours 20 minutes on 4-threads CPU',
        HDD: 'HDD space after installation: up to 112.8 GB',
        Language: 'Language can be changed in game settings',
        RAM1: 'At least 8 GB of free RAM (inc. virtual) required for installing this repack',
        image: require('../img/cyber4.jpg'),
        img:[require('../img/cyber1.jpg'),require('../img/cyber2.jpg'),require('../img/cyber3.jpg'),require('../img/cyber5.jpg')],
        Price: '2999'
        },
        {
            id:7,
            name:'RED DEAD REDEMPTION 2',
            OperatingSystem: "Windows 10",
            CPU: " i3 8th gen processor or higher",
            RAM: "RAM: 12 GB",
            SetupSize: "SetupSize:  66.3 GB ",
            HardDiskSpace: " HardDiskSpace: 113.7 GB",
            Basedon: 'Based on Red.Dead.Redemption.2.-EMPRESS+Mr_Goldberg ISO release: emp-rdr2',
            GameVersion: ' Game version is Build 1311.23',
            Install: 'Installation takes: ~1 hour 40 minutes on 16-threads CPU; ~3 hour 10 minutes on 8-threads CPU; ~5 hours 4-threads CPU',
            HDD: 'HDD space after installation: 117 GB',
            Language: 'Language is automatically set by detecting your system locale',
            RAM1: 'At least 8 GB of free RAM (inc. virtual) required for installing this repack',
            image: require('../img/red.jpg'),
            img:[require('../img/red1.jpg'),require('../img/red2.jpg'),require('../img/red3.jpg'),require('../img/red4.jpg'),],
            Price: '3000'
        },
        {
            id:8,
            name:'DEVIL MAY CRY 5: DELUXE EDITION ',
            OperatingSystem: "Windows 7/8/8.1/10",
            CPU: " i3 8th gen processor or higher",
            RAM: "RAM: 8 GB",
            SetupSize: "SetupSize: 22.5 GB ",
            HardDiskSpace: " HardDiskSpace: 39.7 GB",
            Basedon: 'Based on Devil.May.Cry.5.Vergil-CODEX ISO release: codex-devil.may.cry.5.vergil.iso ',
            GameVersion: ' Game version: v12152020/5962864',
            Install: 'Installation takes: ~15 minutes on 8-threads CPU; ~30 minutes on 4-threads CPU',
            HDD: 'HDD space after installation: up to 40 GB',
            Language: 'Language Selector.exe” in game root to change the game language; subtitles and VOs can be changed separately in game settings',
            RAM1: 'At least 8 GB of free RAM (inc. virtual) required for installing this repack',
            image: require('../img/devil3.jpg'),
            img:[require('../img/devil1.jpg'),require('../img/devil2.jpg'),require('../img/devil3.jpg'),require('../img/devil4.jpg'),],
            Price: '1500'
        },
        {
            id:9,
            name:'Marvel Spider-Man Remastered ',
            OperatingSystem: "Windows 10",
            CPU: " i3 8th gen processor or higher",
            RAM: "RAM: 8 GB",
            SetupSize: "SetupSize:  37.6 GB  ",
            HardDiskSpace: " HardDiskSpace: 78.3 GB",
            Basedon: 'Based on Steam BuildID 9304506 MULTi21 release: 78.3 GB, thanks to Crimechaser!',
            GameVersion: ' Game version: v1.812.1.0; Pre-purchase Entitlements (DLC) is included and activated',
            Install: 'Installation takes 12-35 minutes (depending on your system and selected components)',
            HDD: 'HDD space after installation: up to 78.3 GB',
            Language: 'GUI/text language can be changed in game settings',
            RAM1: 'At least 8 GB of free RAM (inc. virtual) required for installing this repack',
            image: require('../img/spider1.jpg'),
            img:[require('../img/spider2.jpg'),require('../img/spider3.jpg'),require('../img/spider4.jpg'),require('../img/spider5.jpg')],
            Price: '2999'
        }    
    ]

export var shootinginfo =
    [
        {
            id: 1,
            name: 'CALL OF DUTY: GHOST ',
            OperatingSystem: "Windows 7/8/8.1/10",
            CPU: " i3 processor or higher",
            RAM: "RAM: 2GB",
            SetupSize: "SetupSize: 37.4 GB ",
            HardDiskSpace: " HardDiskSpace: 65 GB",
            image: require('../img/shooting/ghost.jpg'),
            Basedon: '',
            GameVersion: ' v1.5.3, all DLCs are included and activated (except some uPlay rewards)',
            Install: 'Installation takes (for any single audio language): ~13 minutes on 16-threads CPU; ~22 minutes on 8-threads CPU; ~40 minutes on 4-threads CPU',
            HDD: 'HDD space after installation: 65 GB (71 GB during installation)',
            Language: 'Use REG-file in “_Language Switcher” folder to switch the game language',
            RAM1: 'At least 2 GB of free RAM (inc. virtual) required for installing this repack',
            img:[require('../img/shooting/ghost.jpg'),require('../img/shooting/ghost1.jpg'),require('../img/shooting/ghost2.jpg')],
            Price: '800'
        },
        {
            id: 2,
            name: 'CALL OF DUTY: INFINITE WARFARE ',
            OperatingSystem: "Windows 7/8/8.1/10",
            CPU: " i3 processor or higher",
            RAM: "RAM: 2GB",
            SetupSize: "SetupSize: 37.7 GB ",
            HardDiskSpace: " HardDiskSpace: 94.8 GB",
            image: require('../img/shooting/infinite 1.jpg'),
            Basedon: '',
            GameVersion: ' v1.5.3, all DLCs are included and activated (except some uPlay rewards)',
            Install: 'Installation takes 1.5-2.5 hours (depending on your system and selected components)',
            HDD: 'HDD space after installation: 62~67 GB (~71 GB during installation)',
            Language: 'Use REG-file in “_Language Switcher” folder to switch the game language',
            RAM1: 'At least 2 GB of free RAM (inc. virtual) required for installing this repack',
            img:[require('../img/shooting/infinite 1.jpg'),require('../img/shooting/infinite 2.jpg'),require('../img/shooting/infinite 3.jpg')],
            Price: '900'

        },
        {
            id: 3,
            name: 'Call of Duty: Black Ops III ',
            OperatingSystem: "Windows 7/8/8.1/10",
            CPU: " i3 processor or higher",
            RAM: "RAM: 2GB",
            SetupSize: "SetupSize: 37.7 GB ",
            HardDiskSpace: " HardDiskSpace: 94.8 GB",
            image: require('../img/shooting/black ops 3.jpg'),
            Basedon: '',
            GameVersion: ' v1.5.3, all DLCs are included and activated (except some uPlay rewards)',
            Install: 'Installation takes (4-threads CPU + HDD, one language): ~2 hours for SP mode; ~ 3 hours for SP+MP+Zombie mode. Installation is much faster on SSDs and more powerful CPUs',
            HDD: 'HDD space after installation: up to 181 GB (depending on selected components and languages)',
            Language: 'Use REG-file in “_Language Switcher” folder to switch the game language',
            RAM1: 'At least 2 GB of free RAM (inc. virtual) required for installing this repack',
            img:[require('../img/shooting/black ops 3 first.jpg'),require('../img/shooting/black ops 3 second.jpg'),require('../img/shooting/black ops 3.jpg')],
           
            Price: '1900'
        }
    ]

export var racinginfo=
    [
        {
            id: 1,
            name: 'Need For Speed Hot Pursuit Remastered',
            OperatingSystem: "Windows 7/8/8.1/10",
            CPU: " i3 processor or higher",
            RAM: "RAM: 2GB",
            SetupSize: "SetupSize: 3.2gb",
            HardDiskSpace: "HardDiskSpace: 7.2gb",
            image: require('../img/nfs1.jpg'),
            HDD: '7.2 GB (up to 10 GB during installation)',
            Install: '4-8 minutes',
            Basedon: 'Switch release with Update v196608 installed over (v1.0.3): 7 GB',
            Language: ' can be changed in Yuzu game settings (RMB on a game -> Properties -> System -> Language)',
            RAM1: 'At least 2 GB of free RAM (inc. virtual) required for installing this repack',
            img:[require('../img/nfs/nfs1.jpg'),require('../img/nfs/nfs2.jpg'),require('../img/nfs/nfs3.jpg'),require('../img/nfs/nfs4.jpg')],
           
            Price: '100'
        },
        {
            id:2,
            OperatingSystem: "Windows 7/8/8.1/10",
            CPU: " i3 processor or higher",
            RAM: "RAM: 8GB",
            name:'NEED FOR SPEED: PAYBACK DELUXE EDITION',
            HardDiskSpace:' HardDiskSpace: 27.5 GB',
            SetupSize:'SETUPSIZE: 13.2 GB',
            Install:'Installation takes: ~8 minutes on 8-threads CPU; ~15 minutes on 4-threads CPU',
            HDD:'HDD space after installation: 27 GB (up to 33 GB during installation)',
            Language:'Use “Language Selector.exe” in game root to change the game language',
            RAM1:'At least 2 GB of free RAM (inc. virtual) required for installing this repack',
            image: require('../img/nfs/payback6.jpg'),
            img:[require('../img/nfs/payback1.jpg'),require('../img/nfs/payback3.jpg'),require('../img/nfs/payback4.jpg'),require('../img/nfs/payback5.jpg')], 
            Price:'300'
        },
        {
            id:3,
            OperatingSystem: "Windows 7/8/8.1/10",
            CPU: " i3 processor or higher",
            RAM: "RAM: 8GB",
            name:'NEED FOR SPEED: MOST WANTED 2012',
            HardDiskSpace:' HardDiskSpace: 7.4 GB',
            SetupSize:'SETUPSIZE:  2.5/2.6 GB',
            Install:'Installation takes 7-25 minutes (depending on your system)',
            HDD:'HDD space after installation: 7 GB',
            Language:'',
            RAM1:'At least 2 GB of free RAM (inc. virtual) required for installing this repack',
            image: require('../img/nfs/wanted1.jpg'),
            img:[require('../img/nfs/wanted1.jpg'),require('../img/nfs/wanted2.jpg'),require('../img/nfs/wanted3.jpg'),require('../img/nfs/wanted4.jpg')], 
            Price:'300'
        },
        {
            id:4,
            name:'FORZA HORIZON 5: PREMIUM EDITION',
            OperatingSystem: "Windows 7/8/8.1/10",
            CPU: " i3 8th gen processor or higher",
            RAM: "RAM: 8 GB",
            SetupSize: "SetupSize: 67.1 GB ",
            HardDiskSpace: " HardDiskSpace: 160.2 GB",
            Basedon: 'Based on Steam release BuildID 10876356: 160.2 GB, thanks to Carfixer for files!',
            GameVersion: ' v1.573.834.0; 44 released DLCs are included and activated',
            Install: 'Installation takes (any single language, no optional videos): from ~45 minutes (on 24-threads CPU) up to ~2 hours (4-threads CPU)',
            HDD: 'HDD space after installation: up to 160.2 GB',
            Language: 'Language can be changed in game settings',
            RAM1: 'At least 8 GB of free RAM (inc. virtual) required for installing this repack',
            image: require('../img/forza5.jpg'),
            img:[require('../img/forza.jpg'),require('../img/forza1.jpg'),require('../img/forza2.jpg'),require('../img/forza3.jpg'),],
            Price: '500'
    
        },
        
            
    ]



export var sportsinfo=
    [   {
        id:1,
        OperatingSystem: "Windows 7/8/8.1/10",
        CPU: " i3 processor or higher",
        RAM: "RAM: 8GB",
        name:'WWE 2K19',
        HardDiskSpace:' HardDiskSpace: 43.2 GB',
        SetupSize:'SETUPSIZE: 25.4 GB',
        Install:'Installation takes: ~2-2.5 hours on 8-threads CPU; ~3-4.5 hours on 4-threads CPU. Be advised before downloading.',
        HDD:'HDD space after installation: up to 47 GB (up to 84 GB during installation)',
        Language:'Use “Language Selector.exe” in game root to change the game language',
        RAM1:'At least 4 GB of free RAM (inc. virtual) required for installing this repack',
        image: require('../img/sports/wwe.jpg'),
        img:[require('../img/sports/wwe1.jpg'),require('../img/sports/wwe2.jpg'),require('../img/sports/wwe3.jpg')], 
          
        Price:'300'
        },
        {
        id:2,
        OperatingSystem: "Windows 7/8/8.1/10",
        CPU: " i3 processor or higher",
        RAM: "RAM: 8GB",
        name:'FIFA 19',
        HardDiskSpace:' HardDiskSpace: 47.3 GB',
        SetupSize:'SETUPSIZE: from 21.8 or 28.9 GB',
        Install:'Installation takes: ~2-2.5 hours on 8-threads CPU; ~3-4.5 hours on 4-threads CPU. Be advised before downloading.',
        HDD:'HDD space after installation: up to 47 GB (up to 84 GB during installation)',
        Language:'Use “Language Selector.exe” in game root to change the game language',
        RAM1:'At least 4 GB of free RAM (inc. virtual) required for installing this repack',
        image: require('../img/sports/fifa2.jpg'),
        img:[require('../img/sports/fifa.jpg'),require('../img/sports/fifa2.jpg'),require('../img/sports/fifa3.jpg')], 
        Price:'1300'
        },
        {
        id:3,
        OperatingSystem: "Windows 7/8/8.1/10",
        CPU: " i3 processor or higher",
        RAM: "RAM: 8GB",
        name:'FIFA 23',
        HardDiskSpace:' HardDiskSpace: 50 GB',
        SetupSize:'SETUPSIZE: 35 GB',
        Install:'Installation takes: ~2-2.5 hours on 8-threads CPU; ~3-4.5 hours on 4-threads CPU. Be advised before downloading.',
        HDD:'HDD space after installation: up to 47 GB (up to 84 GB during installation)',
        Language:'Use “Language Selector.exe” in game root to change the game language',
        RAM1:'At least 4 GB of free RAM (inc. virtual) required for installing this repack',
        image: require('../img/fifa.jpg'),
        img:[require('../img/fifa1.jpg'),require('../img/fifa2.jpg'),require('../img/fifa3.jpg'),require('../img/fifa4.jpg')], 
        Price:'2999'
        }
    ]

export var fightinginfo=
[
    {
        id:1,
        Basedon:'Based on TEKKEN.7.Season.Pass.4.REPACK-CODEX ISO release: codex-tekken.7.season.pass.4.repack.iso',
        OperatingSystem: "Windows 7/8/8.1/10",
        CPU: " i3 processor or higher",
        RAM: "RAM: 8GB",
        name:'TEKKEN 7: Ultimate Edition',
        HardDiskSpace:' HardDiskSpace: 49.4 GB',
        SetupSize:'SETUPSIZE: 15.3 GB',
        Install:'Installation takes 10-30 minutes (depending on your system and selected components)',
        HDD:'HDD space after installation: up to 79.4 GB',
        Language:'Use “Language Selector.exe” in game root to change the game language',
        RAM1:'At least 8 GB of free RAM (inc. virtual) required for installing this repack',
        image: require('../img/tekken2.jpg'),
        img:[require('../img/tekken1.jpg'),require('../img/tekken3.jpg'),require('../img/tekken4.jpg')], 
        Price:'500'
    },
    {
        id:2,
        Basedon:'Based on Street fighter X Tekken.REPACK-CODEX ISO release: codex-tekken.7.season.pass.4.repack.iso',
        OperatingSystem: "Windows 7/8/8.1/10",
        CPU: " i3 processor or higher",
        RAM: "RAM: 4GB",
        name:'Street Fighter X Tekken',
        HardDiskSpace:' HardDiskSpace: 7.00 GB',
        SetupSize:'SETUPSIZE: 4.5 GB',
        Install:'Installation takes 5-10 minutes (depending on your system and selected components)',
        HDD:'HDD space after installation: up to 8.00 GB',
        Language:'Use “Language Selector.exe” in game root to change the game language',
        RAM1:'At least 4 GB of free RAM (inc. virtual) required for installing this repack',
        image: require('../img/street4.jpg'),
        img:[require('../img/street.jpg'),require('../img/street2.jpg'),require('../img/street3.jpg')], 
        Price:'100'
    }
]
