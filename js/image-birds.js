const birds = [
  { "id": "CS7694", "caption": "Jungle Babbler", "filename": "CS7694_Jungle_Babbler.png", "location": "Billigiri Ranga Tiger Reserve", "year": "2024" }, 
  { "id": "CS7690", "caption": "Blue-capped Rock Thrush", "filename": "CS7690_Blue-capped_Rock_Thrush.png", "location": "Billigiri Ranga Tiger Reserve", "year": "2024" }, 
  { "id": "CS7667", "caption": "Blue-capped Rock Thrush", "filename": "CS7667_Blue-capped_Rock_Thrush.png", "location": "Billigiri Ranga Tiger Reserve", "year": "2024" }, 
  { "id": "CS7652", "caption": "Blue-capped Rock Thrush", "filename": "CS7652_Blue-capped_Rock_Thrush.png", "location": "Billigiri Ranga Tiger Reserve", "year": "2024" }, 
  { "id": "CS7626", "caption": "Blue-capped Rock Thrush", "filename": "CS7626_Blue-capped_Rock_Thrush.png", "location": "Billigiri Ranga Tiger Reserve", "year": "2024" }, 
  { "id": "CS7641", "caption": "Blue-capped Rock Thrush", "filename": "CS7641_Blue-capped_Rock_Thrush.png", "location": "Billigiri Ranga Tiger Reserve", "year": "2024" }, 
  { "id": "CS7601", "caption": "Lesser Goldenback", "filename": "CS7601_Lesser_Goldenback.png", "location": "Billigiri Ranga Tiger Reserve", "year": "2024" }, 
  { "id": "CS7588", "caption": "Lesser Goldenback", "filename": "CS7588_Lesser_Goldenback.png", "location": "Billigiri Ranga Tiger Reserve", "year": "2024" }, 
  { "id": "CS7547", "caption": "Asian Paradise Flycatcher", "filename": "CS7547_Asian_Paradise-flycatcher.png", "location": "Billigiri Ranga Tiger Reserve", "year": "2024" }, 
  { "id": "CS7546", "caption": "Asian Paradise Flycatcher", "filename": "CS7546_Asian_Paradise-flycatcher.png", "location": "Billigiri Ranga Tiger Reserve", "year": "2024" }, 
  { "id": "CS7540", "caption": "Asian Paradise Flycatcher", "filename": "CS7540_Asian_Paradise-flycatcher.png", "location": "Billigiri Ranga Tiger Reserve", "year": "2024" }, 
  { "id": "CS7522", "caption": "Black Drongo", "filename": "CS7522_Black_Drongo.png", "location": "Billigiri Ranga Tiger Reserve", "year": "2024" }, 
  { "id": "C7481", "caption": "Brown Fish Owl", "filename": "C7481_Brown_Fish_Owl.png", "location": "Billigiri Ranga Tiger Reserve", "year": "2024" }, 
  { "id": "C7438", "caption": "Brown Fish Owl", "filename": "C7438_Brown_Fish_Owl.png", "location": "Billigiri Ranga Tiger Reserve", "year": "2024" }, 
  { "id": "C7415", "caption": "Crested Serpent Eagle", "filename": "C7415_CSE.png", "location": "Billigiri Ranga Tiger Reserve", "year": "2024" }, 
  { "id": "C7376", "caption": "Crested Serpent Eagle", "filename": "C7376_CSE.png", "location": "Billigiri Ranga Tiger Reserve", "year": "2024" }, 
  { "id": "C7223", "caption": "Asian Brown Flycatcher", "filename": "CS7223_Asian_Brown_Flycatcher.png", "location": "Billigiri Ranga Tiger Reserve", "year": "2024" }, 
  { "id": "C7218", "caption": "Asian Brown Flycatcher", "filename": "CS7218_Asian_Brown_Flycatcher.png", "location": "Billigiri Ranga Tiger Reserve", "year": "2024" }, 
  { "id": "C7212", "caption": "Asian Brown Flycatcher", "filename": "CS7212_Asian_Brown_Flycatcher.png", "location": "Billigiri Ranga Tiger Reserve", "year": "2024" }, 
  { "id": "CS7075", "caption": "Streak-throated Woodpecker", "filename": "CS7075-Streak-throated_Woodpecker.png", "location": "Billigiri Ranga Tiger Reserve", "year": "2024" }, 
  { "id": "C7131", "caption": "Indian Peafowl", "filename": "C7131_Indian_Peafowl.png", "location": "Bandipur Tiger Reserve", "year": "2024" }, 
  { "id": "C7046", "caption": "Indian Peafowl", "filename": "C7046_Red-wattled_Lapwing.png", "location": "Bandipur Tiger Reserve", "year": "2024" }, 
  { "id": "C6970", "caption": "Lesser Goldenback", "filename": "C6970_Lesser_Goldenback.png", "location": "Bandipur Tiger Reserve", "year": "2024" },   
  { "id": "C6955", "caption": "Lesser Goldenback", "filename": "C6955_Lesser_Goldenback.png", "location": "Bandipur Tiger Reserve", "year": "2024" },   
  { "id": "C6938", "caption": "Indian Peafowl", "filename": "C6938_Indian_Peafowl.png", "location": "Bandipur Tiger Reserve", "year": "2024" }, 
  { "id": "C6911", "caption": "Indian Peafowl", "filename": "C6911_Indian_Peafowl.png", "location": "Bandipur Tiger Reserve", "year": "2024" }, 
  { "id": "C6877", "caption": "Lesser Whistling-duck", "filename": "C6877_Lesser_Whistling-duck.png", "location": "Bandipur Tiger Reserve", "year": "2024" },
  { "id": "C6763", "caption": "Green Bee-eater", "filename": "C6763_Green_Bee-eater.png", "location": "Bandipur Tiger Reserve", "year": "2024" },
  { "id": "C6714", "caption": "Green Bee-eater", "filename": "C6714_Green_Bee-eater.png", "location": "Bandipur Tiger Reserve", "year": "2024" },
  { "id": "C6388", "caption": "Changeable Hawk Eagle", "filename": "C6388_CHE.png", "location": "Bandipur Tiger Reserve", "year": "2024" },
  { "id": "C6231", "caption": "Crested Serpent Eagle", "filename": "CIMG_6231_Crested_Serpent_Eagle.jpg", "location": "Bandipur Tiger Reserve", "year": "2024" },
  { "id": "C6210", "caption": "Crested Serpent Eagle", "filename": "CIMG_6210_Crested_Serpent_Eagle.jpg", "location": "Bandipur Tiger Reserve", "year": "2024" },
  { "id": "C6150", "caption": "Crested Serpent Eagle", "filename": "CIMG_6150_Crested_Serpent_Eagle.jpg", "location": "Bandipur Tiger Reserve", "year": "2024" },
  { "id": "C6126", "caption": "Indian Peafowl", "filename": "C6126_Indian_Peafowl.png", "location": "Bhadra Reservior", "year": "2024" },
  { "id": "CS5864", "caption": "White-rumped Shama", "filename": "CS5864_White-rumped_Shama.png", "location": "Bhadra Reservior", "year": "2024" },
  { "id": "CS4823", "caption": "Malabar Hornbill", "filename": "CS4823_Malabar_Hornbill.png", "location": "Bhadra Reservior", "year": "2024" },
  { "id": "CS4812", "caption": "Malabar Hornbill", "filename": "CS4812_Malabar_Hornbill.png", "location": "Bhadra Reservior", "year": "2024" },
  { "id": "CS4736", "caption": "Asian Paradise Flycatcher", "filename": "CS4736_Asian_Paradise-flycatcher.png", "location": "Bhadra Reservior", "year": "2024" },
  { "id": "CS4710", "caption": "Indian Peafowl", "filename": "CS4710_Indian_Peacock.png", "location": "Bhadra Reservior", "year": "2024" },
  { "id": "CS4704", "caption": "Indian Peafowl", "filename": "CS4704_Indian_Peafowl.png", "location": "Bhadra Reservior", "year": "2024" },
  { "id": "CS4230", "caption": "Indian Spot-billed Duck", "filename": "CSIMG_4230_Indian_Spot-billed_Duck.png", "location": "Bhadra Reservior", "year": "2024" },
  { "id": "CS4199", "caption": "Black-headed Ibis", "filename": "CSIMG_4199_Black-headed_Ibis.png", "location": "Bhadra Reservior", "year": "2024" },
  { "id": "CS4176", "caption": "River Tern", "filename": "CSIMG_4176_River_Tern.png", "location": "Bhadra Reservior", "year": "2024" },
  { "id": "CS4140", "caption": "River Tern", "filename": "CSIMG_4140_River_Tern.png", "location": "Bhadra Reservior", "year": "2024" },
  { "id": "CS4134", "caption": "River Tern", "filename": "CSIMG_4134_River_Tern.png", "location": "Bhadra Reservior", "year": "2024" },
  { "id": "CS4121", "caption": "River Tern", "filename": "CSIMG_4121_River_Tern.png", "location": "Bhadra Reservior", "year": "2024" },
  { "id": "CS4066", "caption": "River Tern", "filename": "CSIMG_4066_River_Tern.png", "location": "Bhadra Reservior", "year": "2024" },
  { "id": "CS4055", "caption": "River Tern", "filename": "CSIMG_4055_River_Tern.png", "location": "Bhadra Reservior", "year": "2024" },
  { "id": "CS4016", "caption": "White-browed Wagtail", "filename": "CSIMG_4016_White-browed_Wagtail.png", "location": "Melukote", "year" : "2023" }, 
  { "id": "CS4038", "caption": "White-browed Wagtail", "filename":"CSIMG_4038_White-browed_Wagtail.png", "location": "Melukote", "year" : "2023" }, 
  { "id": "CS4013", "caption": "Spotted Owlet", "filename":"CSIMG_4013_Spotted_Owlet.png", "location": "Melukote", "year" : "2023" }, 
  { "id": "CS4008", "caption": "Spotted Owlet", "filename":"CSIMG_4008_SpottedOwlet.png", "location": "Melukote", "year" : "2023" }, 
  { "id": "CS3990", "caption": "Spotted Owlet", "filename":"CSIMG_3990_Spotted_Owlet.png", "location": "Melukote", "year" : "2023" }, 
  { "id": "CS3985", "caption": "White-cheeked Barbet", "filename":"CSIMG_3985_White-cheeked_Barbet.png", "location": "Melukote", "year" : "2023" }, 
  { "id": "CS3978", "caption": "Small Minivet", "filename":"CSIMG_3978_Small_Minivet.png", "location": "Melukote", "year" : "2023" }, 
  { "id": "CS3939", "caption": "Small Minivet", "filename":"CSIMG_3939_Small_Minivet.png", "location": "Melukote", "year" : "2023" }, 
  { "id": "CS3947", "caption": "Small Minivet", "filename":"CSIMG_3947_Small_Minivet.png", "location": "Melukote", "year" : "2023" },
  { "id": "CS3943", "caption": "Small Minivet", "filename":"CSIMG_3943_Small_Minivet.png", "location": "Melukote", "year" : "2023"},
  { "id": "CS3921", "caption": "Small Minivet", "filename":"CSIMG_3921_Small_Minivet.png", "location": "Melukote", "year" : "2023"},
  { "id": "CS3912", "caption": "Spotted Owlet", "filename":"CSIMG_3912_Spotted_Owlet.png", "location": "Melukote", "year" : "2023"},
  { "id": "CS3879", "caption": "Spotted Owlet", "filename":"CSIMG_3879_Spotted_Owlet.png", "location": "Melukote", "year" : "2023"},
  { "id": "CS3864", "caption": "Spotted Owlet", "filename":"CSIMG_3864_Spotted_Owlet.png", "location": "Melukote", "year" : "2023"},
  { "id": "CS3851", "caption": "Spotted Owlet", "filename":"CSIMG_3851_Spotted_Owlet.png", "location": "Melukote", "year" : "2023"},
  { "id": "CS3841", "caption": "Great Cormorant", "filename":"CSIMG_3841_Great_Cormorant.png", "location": "Melukote", "year" : "2023"},
  { "id": "CS3833", "caption": "Spotted Owlet", "filename":"CSIMG_3833_Spotted_Owlet.png", "location": "Melukote", "year" : "2023"},
  { "id": "CS3824", "caption": "Spotted Owlet", "filename":"CSIMG_3824_Spotted_Owlet.png", "location": "Melukote", "year" : "2023"},
  { "id": "CS3812", "caption": "Spotted Owlet", "filename":"CSIMG_3812_Spotted_Owlet.png", "location": "Melukote", "year" : "2023"},
  { "id": "CS3802", "caption": "Red-wattled Lapwing", "filename":"CSIMG_3802_Red-wattled_Lapwing.png", "location": "Melukote", "year" : "2023"},
  { "id": "CS3796", "caption": "Spotted Owlet", "filename":"CSIMG_3796_Spotted_Owlet.png", "location": "Melukote", "year" : "2023"},
  { "id": "CS3788", "caption": "Booted Warbler", "filename":"CSIMG_3788_Booted_Warbler.png", "location": "Melukote", "year" : "2023"},
  { "id": "CS3771", "caption": "Red-naped Ibis", "filename":"CSIMG_3771_Red-naped_Ibis.png", "location": "Melukote", "year" : "2023"},
  { "id": "CS3756", "caption": "Red-naped Ibis", "filename":"CSIMG_3756_Red-naped_Ibis.png", "location": "Melukote", "year" : "2023"},
  { "id": "CS3738", "caption": "Red-naped Ibis", "filename":"CSIMG_3738_Red-naped_Ibis.png", "location": "Melukote", "year" : "2023"},
  { "id": "CS3745", "caption": "Red-naped Ibis", "filename":"CSIMG_3745_Red-naped_Ibis.png", "location": "Melukote", "year" : "2023"},
  { "id": "3469CS", "caption": "Spotted Owlet", "filename": "CSIMG_3469_Spotted_Owlet.png", "location": "Melukote", "year" : "2023"},
  { "id": "3723CS", "caption": "Grey Heron", "filename": "CSIMG_3723_Grey_Heron.png", "location": "Melukote", "year" : "2023"},
  { "id": "3716CS", "caption": "Intermediate Egret", "filename": "CSIMG_3716_Intermediate_Egret.png", "location": "Melukote", "year" : "2023"},
  { "id": "3677CS", "caption": "Coppersmith Barbet", "filename": "CSIMG_3677_Coppersmith_Barbet.png", "location": "Melukote", "year" : "2023"},
  { "id": "3671CS", "caption": "Coppersmith Barbet", "filename": "CSIMG_3671_Coppersmith_Barbet.png", "location": "Melukote", "year" : "2023"},
  { "id": "3657CS", "caption": "Coppersmith Barbet", "filename": "CSIMG_3657_Coppersmith_Barbet.png", "location": "Melukote", "year" : "2023"},
  { "id": "3604CS", "caption": "Yellow-footed Green Pigeon", "filename": "CSIMG_3604_Yellow-footed_Green_Pigeon.png", "location": "Melukote", "year" : "2023"},
  { "id": "3600CS", "caption": "Common Kingfisher", "filename": "CSIMG_3600_Common_Kingfisher.png", "location": "Melukote", "year" : "2023"},
  { "id": "3595CS", "caption": "Common Kingfisher", "filename": "CSIMG_3595_Common_Kingfisher.png", "location": "Melukote", "year" : "2023"},
  { "id": "3573CS", "caption": "Little Grebe", "filename": "CSIMG_3573_Little_Grebe.png", "location": "Melukote", "year" : "2023" },
  { "id": "3552CS", "caption": "Spotted Owlet", "filename": "CSIMG_3552_Spotted_Owlet.png", "location": "Melukote", "year" : "2023" },
  { "id": "3530CS", "caption": "Spotted Owlet", "filename": "CSIMG_3530_Spotted_Owlet.png", "location": "Melukote", "year" : "2023" },
  { "id": "3513CS", "caption": "Spotted Owlet", "filename": "CSIMG_3513_Spotted_Owlet.png", "location": "Melukote", "year" : "2023" },
  { "id": "3470CS", "caption": "Spotted Owlet", "filename": "CSIMG_3470_Spotted_Owlet.png", "location": "Melukote", "year" : "2023" },
  { 'id': '3452CS', 'caption': 'Jerdons Bushlark', 'filename': '3452CS_jerdons_Bushlark.png', "location": "Melukote", "year" : "2023" },
  { 'id': '3263CS', 'caption': 'Asian Green Bee-eater', 'filename': '3263CS_Asian_Green_Bee-eater.png', "location": "Melukote", "year" : "2023" },
  { 'id': '3269CS', 'caption': 'Southern Coucal', 'filename': '3269CS_Southern_Coucal.png', "location": "Melukote", "year" : "2023" },
  { 'id': '3307CS', 'caption': 'Indian Cormorant', 'filename': '3307CS_Indian_Cormorant.png', "location": "Melukote", "year" : "2023" },
  { 'id': '3284CS', 'caption': 'White-browed Bulbul', 'filename': '3284CS_White-browed_Bulbul.png', "location": "Melukote", "year" : "2023" },
  { 'id': '3198CS', 'caption': 'White-throated Kingfisher', 'filename': '3198CS_White-throated_Kingfisher.png', "location": "Melukote", "year" : "2023" },
  { 'id': '2565CS', 'caption': 'Purple Sunbird', 'filename': '2565CS_PurpleSunbird.png', "location": "Bangalore", "year" : "2023" },
  { 'id': '2956CS', 'caption': 'Spotted Dove', 'filename': '2596CS_SpottedDove.png',  "location": "Bangalore", "year" : "2023" },
  { 'id': '3184CS', 'caption': 'White-throated Kingfisher', 'filename': '3184CS_White-throated_Kingfisher.png', "location": "Melukote", "year" : "2023" },
  { 'id': '3194CS', 'caption': 'White-throated Kingfisher', 'filename': '3194CS_White-throated_Kingfisher.png', "location": "Melukote", "year" : "2023" },
  { "id": "10108", "caption": "Paddyfield Pipit", "filename": "10108_PaddyfieldPipit.jpg", "location": "Hosakote Lake", "year": "2016" },
  { "id": "10127", "caption": "Paddyfield Pipit", "filename": "10127_PaddyfieldPipit.jpg", "location": "Hosakote Lake", "year": "2016" },
  { "id": "10271", "caption": "Paddyfield Pipit", "filename": "10271_PaddyfieldPipit.jpg", "location": "Hosakote Lake", "year": "2016" },
  { "id": "10292", "caption": "Indian Robin", "filename": "10292_IndianRobin.jpg", "location": "Hosakote Lake", "year": "2016" },
  { "id": "10330", "caption": "Long-tailed Shrike", "filename": "10330_Long-tailedShrike.jpg", "location": "Hosakote Lake", "year": "2016" },
  { "id": "10342", "caption": "Common Hoopoe", "filename": "10342_CommonHoopoe.jpg", "location": "Hosakote Lake", "year": "2016" },
  { "id": "10357", "caption": "Common Hoopoe", "filename": "10357_CommonHoopoe.jpg", "location": "Hosakote Lake", "year": "2016" },
  { "id": "10364", "caption": "Common Hoopoe", "filename": "10364_CommonHoopoe.jpg", "location": "Hosakote Lake", "year": "2016" },
  { "id": "10391", "caption": "Common Hoopoe", "filename": "10391_CommonHoopoe.jpg", "location": "Hosakote Lake", "year": "2016" },
  { "id": "10395", "caption": "Common Hoopoe", "filename": "10395_CommonHoopoe.jpg", "location": "Hosakote Lake", "year": "2016" },
  { "id": "10404", "caption": "Common Hoopoe", "filename": "10404_CommonHoopoe.jpg", "location": "Hosakote Lake", "year": "2016" },
  { "id": "10435", "caption": "Common Hoopoe", "filename": "10435_CommonHoopoe.jpg", "location": "Hosakote Lake", "year": "2016" },
  { "id": "10445", "caption": "Yellow-wattled Lapwing", "filename": "10445_Yellow-wattledLapwing.jpg", "location": "Hosakote Lake", "year": "2016" },
  { "id": "10458", "caption": "Yellow-wattled Lapwing", "filename": "10458_Yellow-wattledLapwing.jpg", "location": "Hosakote Lake", "year": "2016" },
  { "id": "10470", "caption": "Yellow-wattled Lapwing", "filename": "10470_YWL.jpg", "location": "Hosakote Lake", "year": "2016" },
  { "id": "10481", "caption": "Yellow-wattled Lapwing", "filename": "10481_YWL.jpg", "location": "Hosakote Lake", "year": "2016" },
  { "id": "10481F", "caption": "Yellow-wattled Lapwing", "filename": "10481_Yellow-WattledLapwing.jpg", "location": "Hosakote Lake", "year": "2016" },
  { "id": "10491", "caption": "Yellow-wattled Lapwing", "filename": "10491_YWL.jpg", "location": "Hosakote Lake", "year": "2016" },
  { "id": "10495", "caption": "Yellow-wattled Lapwing", "filename": "10495_YWL.jpg", "location": "Hosakote Lake", "year": "2016" },
  { "id": "10537", "caption": "Plain Prinia", "filename": "10537_PlainPirnia.jpg", "location": "Hosakote Lake", "year": "2016" },
  { "id": "10598", "caption": "Southern Coucal", "filename": "10598_SouthernCoucal.jpg", "location": "Hosakote Lake", "year": "2016" },
  { "id": "10608", "caption": "Indian Robin", "filename": "10608_IndianRobin(Juv).jpg", "location": "Hosakote Lake", "year": "2016" },
  { "id": "11653", "caption": "Jungle Babbler", "filename": "11653_JungleBabbler.jpg", "location": "TBD", "year": "2017" },
  { "id": "11745", "caption": "Small Minivet", "filename": "11745_SmallMinivet.jpg", "location": "TBD", "year": "2017" },
  { "id": "11766", "caption": "Small Minivet", "filename": "11766_SmallMinivet.jpg", "location": "TBD", "year": "2017" },
  { "id": "11957", "caption": "Little Ringed Plover", "filename": "11957_LittleRingedPlover.jpg", "location": "TBD", "year": "2017" },
  { "id": "11962", "caption": "Little Ringed Plover", "filename": "11962_LittleRingedPlover.jpg", "location": "TBD", "year": "2017" },
  { "id": "12000", "caption": "Grey Wagtail", "filename": "12000_YellowWagtail.jpg", "location": "TBD", "year": "2017" },
  { "id": "12004", "caption": "Grey Wagtail", "filename": "12004_YellowWagtail.jpg", "location": "TBD", "year": "2017" },
  { "id": "12020", "caption": "Spot-billed Pelican", "filename": "12020_Spot-billedPelican.jpg", "location": "TBD", "year": "2017" },
  { "id": "12029", "caption": "Grey Heron", "filename": "12029_GreyHeron.jpg", "location": "TBD", "year": "2017" },
  { "id": "12467", "caption": "Indian Roller", "filename": "12467_IndianRoller.jpg", "location": "TBD", "year": "2017" },
  { "id": "13508", "caption": "Golden-fronted Leafbird", "filename": "13508_Golder-frontedLeafbird.jpg", "location": "Thattekad", "year": "2018" },
  { "id": "14718", "caption": "Black-rumped Flameback", "filename": "14718_LesserGoldenback.jpg", "location": "Thattekad", "year": "2018" },
  { "id": "14723", "caption": "Greater Racket-tailed Drongo", "filename": "14723_GreaterRacket-tailedDrongo.jpg", "location": "Thattekad", "year": "2018" },
  { "id": "14726", "caption": "Black-hooded Oriole", "filename": "14726_Black-hoodedOriole.jpg", "location": "Thattekad", "year": "2018" },
  { "id": "14733", "caption": "Asian Paradise Flycatcher", "filename": "14733_AsianParadise-flycatcher.jpg", "location": "Thattekad", "year": "2018" },
  { "id": "14745", "caption": "Heart-spotted Woodpecker", "filename": "14745_Heart-spottedWoodpecker.jpg", "location": "Thattekad", "year": "2018" },
  { "id": "14781", "caption": "Asian Fairy-bluebird", "filename": "14781_AsianFairyBluebird.jpg", "location": "Thattekad", "year": "2018" },
  { "id": "14819", "caption": "Black-naped Oriole", "filename": "14819_Black-napedOriole.jpg", "location": "Thattekad", "year": "2018" },
  { "id": "14908", "caption": "Dollarbird", "filename": "14908_Dollarbird.jpg", "location": "Thattekad", "year": "2018" },
  { "id": "14935", "caption": "Thick-billed Warbler", "filename": "14935_Thick-billedWarbler.jpg", "location": "Thattekad", "year": "2018" },
  { "id": "14959", "caption": "Asian Brown Flycatcher", "filename": "14959_AsianBrownFlycatcher.jpg", "location": "Thattekad", "year": "2018" },
  { "id": "15030", "caption": "Ashy Drongo", "filename": "15030_AshyDrongo.jpg", "location": "Thattekad", "year": "2018" },
  { "id": "15042", "caption": "Ashy Drongo", "filename": "15042_AshyDrongo.jpg", "location": "Thattekad", "year": "2018" },
  { "id": "15063", "caption": "Blue-tailed Bee-eater", "filename": "15063_Blue-tailedBee-eater.jpg", "location": "Thattekad", "year": "2018" },
  { "id": "15096", "caption": "Great Egret", "filename": "15096_GreatEgret.jpg", "location": "Thattekad", "year": "2018" },
  { "id": "15097", "caption": "Blue-tailed Bee-eater", "filename": "15097_Blue-tailedBee-eater.jpg", "location": "Thattekad", "year": "2018" },
  { "id": "15105", "caption": "Blue-tailed Bee-eater", "filename": "15105_Blue-tailedBee-eater.jpg", "location": "Thattekad", "year": "2018" },
  { "id": "15141", "caption": "White-breasted Waterhen", "filename": "15141_White-breastedWaterhen.jpg", "location": "Thattekad", "year": "2018" },
  { "id": "15154", "caption": "Black-hooded Oriole", "filename": "15154_Black-hoodedOriole.jpg", "location": "Thattekad", "year": "2018" },
  { "id": "15178", "caption": "Rufous Treepie", "filename": "15178_RufousTreepie.jpg", "location": "Thattekad", "year": "2018" },
  { "id": "15234", "caption": "Malabar Grey Hornbill", "filename": "15234_GreyHornbill.jpg", "location": "Thattekad", "year": "2018" },
  { "id": "15284", "caption": "Golden-fronted Leafbird", "filename": "15284_Golden-frontedLeafbird.jpg", "location": "Thattekad", "year": "2018" },
  { "id": "15299", "caption": "Golden-fronted Leafbird", "filename": "15299_Golden-frontedLeafbird.jpg", "location": "Thattekad", "year": "2018" },
  { "id": "15321", "caption": "Verditer Flycatcher", "filename": "15321_VerditerFlycatcher.jpg", "location": "Thattekad", "year": "2018" },
  { "id": "15324", "caption": "Verditer Flycatcher", "filename": "15324_VerditerFlycatcher.jpg", "location": "Thattekad", "year": "2018" },
  { "id": "15358", "caption": "Malabar Trogan", "filename": "15358_Malabar_Trogan.jpg", "location": "Thattekad", "year": "2018" },
  { "id": "15422", "caption": "Blyths Starling", "filename": "15422_BlythsStarling-BlackDrongo.jpg", "location": "Thattekad", "year": "2018" },
  { "id": "15467", "caption": "Black-naped Oriole", "filename": "15467_Black-napedOriole.jpg", "location": "Thattekad", "year": "2018" },
  { "id": "15470", "caption": "Vernal Hanging Parrot", "filename": "15470_VernalHangingParrot.jpg", "location": "Thattekad", "year": "2018" },
  { "id": "15533", "caption": "Crimson-backed Sunbird", "filename": "15533_Crimson-backedSunbird.jpg", "location": "Thattekad", "year": "2018" },
  { "id": "15545", "caption": "Flame-throated Bulbul", "filename": "15545_Flame-throatedBulbul.jpg", "location": "Thattekad", "year": "2018" },
  { "id": "15638", "caption": "Srilanka Frogmouth", "filename": "15638_SrilankaFrogmouth.jpg", "location": "Thattekad", "year": "2018" },
  { "id": "15897", "caption": "Painted Stork", "filename": "15897_PaintedStork.jpg", "location": "Kabini", "year": "2019" },
  { "id": "16362", "caption": "Malabar Grey Hornbill", "filename": "16362_GreyHornbill.jpg", "location": "Sakleshpur", "year": "2019" },
  { "id": "16388", "caption": "Puff-throated Babbler", "filename": "16388_puff-throatedBabbler.jpg", "location": "Sakleshpur", "year": "2019" },
  { "id": "16393", "caption": "Asian Fairy-bluebird", "filename": "16393_AsianBlueFairybird.jpg", "location": "Sakleshpur", "year": "2019" },
  { "id": "16437", "caption": "Purple Sunbird", "filename": "16437_PurpleSunbird.jpg", "location": "Sakleshpur", "year": "2019" },
  { "id": "16490", "caption": "White-cheeked Barbet", "filename": "16490_White-cheekedBarbet.jpg", "location": "Bangalore", "year": "2019" },
  { "id": "16793", "caption": "Common Hawk Cuckoo", "filename": "16793_CommonHawkCuckoo.jpg", "location": "Kaveri House", "year": "2019" },
  { "id": "17506", "caption": "Indian White-eye", "filename": "17506_IndianWhiteEye.jpg", "location": "Madhugiri", "year": "2020" },
  { "id": "17583", "caption": "Jerdons Bushlark", "filename": "17583_JerdonsBushlark.jpg", "location": "Madhugiri", "year": "2020" },
  { "id": "17791", "caption": "Bay-backed Shrike", "filename": "17791_Bay-backedShrike.jpg", "location": "Madhugiri", "year": "2020" },
  { "id": "17855", "caption": "Montagus Harrier", "filename": "17855_MontagusHarrier.jpg", "location": "Madhugiri", "year": "2020" },
  { "id": "17881", "caption": "Montagus Harrier", "filename": "17881_MontagusHarrier.jpg", "location": "Madhugiri", "year": "2020" },
  { "id": "17929", "caption": "Indian Roller", "filename": "17929_IndianRoller.jpg", "location": "TBD", "year": "2020" },
  { "id": "17949", "caption": "Laughing Dove", "filename": "17949_LaughingDove.jpg", "location": "Kaveri House", "year": "2020" },
  { "id": "18156", "caption": "Asian Koel", "filename": "18156_AsianKoel.jpg", "location": "TBD", "year": "2020" },
  { "id": "18188", "caption": "Asian Green Bee-eater", "filename": "18188_GreenBee-eater.jpg", "location": "TBD", "year": "2020" },
  { "id": "18217", "caption": "White-bellied Drongo", "filename": "18217_White-belliedDrongo.jpg", "location": "TBD", "year": "2021" },
  { "id": "18242", "caption": "Scaly-breasted Munia", "filename": "18242_ScalyBreastedMunia.jpg", "location": "TBD", "year": "2021" },
  { "id": "18321", "caption": "Indian White-eye", "filename": "18321_IndianWhiteEye.jpg", "location": "Bangalore", "year": "2021" },
  { "id": "18334", "caption": "Indian White-eye", "filename": "18334_IndianWhiteeye.jpg", "location": "Bangalore", "year": "2021" },
  { "id": "18436", "caption": "Ashy Prinia", "filename": "18436_AshyPirnia.jpg", "location": "Hosakote Lake", "year": "2021" },
  { "id": "18533", "caption": "Plain Prinia", "filename": "18533_PlainPirnia.jpg", "location": "Hosakote Lake", "year": "2021" },
  { "id": "18537", "caption": "Paddyfield Pipit", "filename": "18537_PaddyfieldPipit.jpg", "location": "Hosakote Lake", "year": "2021" },
  { "id": "18544", "caption": "Paddyfield Pipit", "filename": "18544_PaddyfieldPipit.jpg", "location": "Hosakote Lake", "year": "2021" },
  { "id": "18560", "caption": "Paddyfield Pipit", "filename": "18560_PaddyfieldPipit.jpg", "location": "Hosakote Lake", "year": "2021" },
  { "id": "18562", "caption": "Paddyfield Pipit", "filename": "18562_PaddyfieldPipit.jpg", "location": "Hosakote Lake", "year": "2021" },
  { "id": "18713", "caption": "Bronzed-winged Jacana", "filename": "18713_Brone-wingedJacana.jpg", "location": "Hosakote Lake", "year": "2021" },
  { "id": "18724", "caption": "Purple Swamphen", "filename": "18724_PurpleSwamphen.jpg", "location": "Hosakote Lake", "year": "2021" },
  { "id": "18739", "caption": "Bronzed-winged Jacana", "filename": "18739_Brone-wingedJacana.jpg", "location": "Hosakote Lake", "year": "2021" },
  { "id": "18829", "caption": "Common Kingfisher", "filename": "18829_CommonKingfisher.jpg", "location": "Billigiri Ranga Tiger Reserve", "year": "2021" },
  { "id": "18839", "caption": "Brown Fish Owl", "filename": "18839_BrownFishOwl.jpg", "location": "Billigiri Ranga Tiger Reserve", "year": "2021" },
  { "id": "19079", "caption": "White-cheeked Barbet", "filename": "19079_White-cheekedBarbet.jpg", "location": "Billigiri Ranga Tiger Reserve", "year": "2021" },
  { "id": "19158", "caption": "Brown Fish Owl", "filename": "19158_BrownFishOwl.jpg", "location": "Billigiri Ranga Tiger Reserve", "year": "2021" },
  { "id": "19190", "caption": "Changeable Hawk Eagle", "filename": "19190_ChangeableHawkEagle.jpg", "location": "Billigiri Ranga Tiger Reserve", "year": "2021" },
  { "id": "19229", "caption": "Changeable Hawk Eagle", "filename": "19229_ChangeableHawkEagle.jpg", "location": "Billigiri Ranga Tiger Reserve", "year": "2021" },
  { "id": "19240", "caption": "Changeable Hawk Eagle", "filename": "19240_ChangeableHawkEagle.jpg", "location": "Billigiri Ranga Tiger Reserve", "year": "2021" },
  { "id": "19297", "caption": "Jungle Owlet", "filename": "19297_JungleOwlet.jpg", "location": "Billigiri Ranga Tiger Reserve", "year": "2021" },
  { "id": "19330", "caption": "Indian Cormorant", "filename": "19330_LittleCormorant.jpg", "location": "Billigiri Ranga Tiger Reserve", "year": "2021" },
  { "id": "19533", "caption": "Changeable Hawk Eagle", "filename": "19533_ChangeableHawkEagle.jpg", "location": "Billigiri Ranga Tiger Reserve", "year": "2021" },
  { "id": "19544", "caption": "Changeable Hawk Eagle", "filename": "19544_ChangeableHawkEagle.jpg", "location": "Billigiri Ranga Tiger Reserve", "year": "2021" },
  { "id": "19561", "caption": "Changeable Hawk Eagle", "filename": "19561_ChangeableHawkEagle-big.jpg", "location": "Billigiri Ranga Tiger Reserve", "year": "2021" },
  { "id": "19561.1", "caption": "Changeable Hawk Eagle", "filename": "19561_ChangeableHawkEagle.jpg", "location": "Billigiri Ranga Tiger Reserve", "year": "2021" },
  { "id": "4019", "caption": "Common Tailerbird", "filename": "4019_CommonTailerBird.jpg", "location": "TBD", "year": "2019" },
  { "id": "4044", "caption": "Red-wattled Lapwing", "filename": "4044_RedWettled_Lapwing.jpg", "location": "TBD", "year": "2018" },
  { "id": "4123", "caption": "Spotted Owlet", "filename": "4123_Spotted_Owlet.jpg", "location": "TBD", "year": "2018" },
  { "id": "4183", "caption": "Asian Koel", "filename": "4183_Cuckoo.jpg", "location": "TBD", "year": "TBD" },
  { "id": "4230", "caption": "White-throated Kingfisher", "filename": "4230_Kingfisher.jpg", "location": "TBD", "year": "2018" },
  { "id": "4236", "caption": "White-throated Kingfisher", "filename": "4236_Kingfisher.jpg", "location": "TBD", "year": "2018" },
  { "id": "4253", "caption": "Long-tailed Shrike", "filename": "4253_Long-tailed_Shrike.jpg", "location": "TBD", "year": "2018" },
  { "id": "4266", "caption": "Long-tailed Shrike", "filename": "4266_Long-tailed_Shrike.jpg", "location": "TBD", "year": "2018" },
  { "id": "4317", "caption": "Tickell's Leaf Warbler", "filename": "4317_Tickells_Leaf_Warbler.jpg", "location": "TBD", "year": "2018" },
  { "id": "4341", "caption": "White-bellied Woodpecker", "filename": "4341_White-bellied_Woodpecker.jpg", "location": "TBD", "year": "2018" },
  { "id": "4349", "caption": "Jungle Owlet", "filename": "4349_JungleOwlet.jpg", "location": "TBD", "year": "2018" },
  { "id": "4373", "caption": "Indian Peafowl", "filename": "4373_Peafowl.jpg", "location": "TBD", "year": "2018" },
  { "id": "4375", "caption": "Indian Peafowl", "filename": "4375_Peafowl.jpg", "location": "TBD", "year": "2018" },
  { "id": "6053", "caption": "Grey Junglefowl", "filename": "6053_KaduKoli_MorningWalk.jpg", "location": "Chikmagalur", "year": "2015" },
  { "id": "6126", "caption": "Common Flameback", "filename": "6126_CommonGoldenback.jpg", "location": "Chikmagalur", "year": "2015" },
  { "id": "6155", "caption": "White-cheeked Barbet", "filename": "6155_WhiteCheekedBarbet.jpg", "location": "Chikmagalur", "year": "2015" },
  { "id": "6237", "caption": "Common Flameback", "filename": "6237_CommonGlodenback.jpg", "location": "Chikmagalur", "year": "2015" },
  { "id": "6281", "caption": "Indian White-eye", "filename": "6281_OrientalWhiteEye.jpg", "location": "Chikmagalur", "year": "2015" },
  { "id": "6289", "caption": "Scarlet Minivet", "filename": "6289_OrangeMinivet.jpg", "location": "Chikmagalur", "year": "2015" },
  { "id": "6305", "caption": "Velvet-fronted Nuthatch", "filename": "6305_ValvetNuthatch.jpg", "location": "Chikmagalur", "year": "2015" },
  { "id": "6370", "caption": "Magpie Robin", "filename": "6370_OrientalMagpieRobin.jpg", "location": "TBD", "year": "TBD" },
  { "id": "6413", "caption": "Common Tailerbird", "filename": "6413_CommonTailorBird.jpg", "location": "TBD", "year": "TBD" },
  { "id": "6613", "caption": "Scaly-breasted Munia", "filename": "6613_Scaly-breastedMunia.jpg", "location": "TBD", "year": "TBD" },
  { "id": "6627", "caption": "Jungle Babbler", "filename": "6627_JungleBabbler.jpg", "location": "TBD", "year": "TBD" },
  { "id": "6665", "caption": "Yellow-eyed Babbler", "filename": "6665_Yellow-eyedBabbler.jpg", "location": "TBD", "year": "TBD" },
  { "id": "6733", "caption": "Indian Peafowl", "filename": "6733_IndianPeacock.jpg", "location": "TBD", "year": "2015" },
  { "id": "6803", "caption": "Purple Sunbird", "filename": "6803_PurpleSunbird.jpg", "location": "TBD", "year": "TBD" },
  { "id": "6827", "caption": "Rose-ringed Parakeet", "filename": "6827_Rose-ringedParakeet.jpg", "location": "Melukote", "year": "2015" },
  { "id": "6835", "caption": "Indian Grey Hornbill", "filename": "6835_IndianGreyHornbill.jpg", "location": "Melukote", "year": "2015" },
  { "id": "6855", "caption": "Long-tailed Shrike", "filename": "6855_Long-tailedShrike.jpg", "location": "Melukote", "year": "2015" },
  { "id": "6860", "caption": "Indian Robin", "filename": "6860_Indian_Robin.jpg", "location": "Melukote", "year": "2015" },
  { "id": "6872", "caption": "Indian Robin", "filename": "6872_IndianRobin.jpg", "location": "Melukote", "year": "2015" },
  { "id": "6967", "caption": "Common Iora", "filename": "6967_unknownBird.jpg", "location": "Melukote", "year": "2015" },
  { "id": "6989", "caption": "Rufous Treepie", "filename": "6989_RufousTreepie.jpg", "location": "Melukote", "year": "2015" },
  { "id": "7157", "caption": "Purple-rumped Sunbird", "filename": "7157_PurpleRumpedSunbird.jpg", "location": "TBD", "year": "2015" },
  { "id": "7159", "caption": "Purple-rumped Sunbird", "filename": "7159_PurpleRumpedSunbird.jpg", "location": "TBD", "year": "2015" },
  { "id": "7202", "caption": "Ashy Prinia", "filename": "7202_AshyPrinia.jpg", "location": "TBD", "year": "2015" },
  { "id": "7296", "caption": "Black Drongo", "filename": "7296_BlackDrongo.jpg", "location": "Hesaraghatta", "year": "2015" },
  { "id": "7301", "caption": "Jungle Babbler", "filename": "7301_JungleBabbler.jpg", "location": "TBD", "year": "2015" },
  { "id": "7333", "caption": "Asian Green Bee-eater", "filename": "7333_GreenBee-eater.jpg", "location": "TBD", "year": "2015" },
  { "id": "7439", "caption": "Spotted Dove", "filename": "7439_SpottedDove.jpg", "location": "TBD", "year": "2015" },
  { "id": "7518", "caption": "Asian Brown Flycatcher", "filename": "7518_AsianBrownFlycatcher.jpg", "location": "Billigiri Ranga Tiger Reserve", "year": "2015" },
  { "id": "7532", "caption": "Asian Brown Flycatcher", "filename": "7532_AsianBrownFlycatcher.jpg", "location": "Billigiri Ranga Tiger Reserve", "year": "2015" },
  { "id": "7539", "caption": "Asian Brown Flycatcher", "filename": "7539_AsianBrownFlycatcher.jpg", "location": "Billigiri Ranga Tiger Reserve", "year": "2015" },
  { "id": "7583", "caption": "Indian Cormorant", "filename": "7583_LittleCormorant.jpg", "location": "Billigiri Ranga Tiger Reserve", "year": "2015" },
  { "id": "7624", "caption": "Grey Junglefowl", "filename": "7624_GreyJunglefowl.jpg", "location": "Billigiri Ranga Tiger Reserve", "year": "2015" },
  { "id": "7647", "caption": "White-throated Kingfisher", "filename": "7647_White-throatedKingfisher.jpg", "location": "Billigiri Ranga Tiger Reserve", "year": "2015" },
  { "id": "7670", "caption": "Crested Serpent Eagle", "filename": "7670_CrestedSerpentEagle.jpg", "location": "Billigiri Ranga Tiger Reserve", "year": "2015" },
  { "id": "7716", "caption": "Southern Coucal", "filename": "7716_SouthernCoucal.jpg", "location": "Billigiri Ranga Tiger Reserve", "year": "2015" },
  { "id": "7748", "caption": "Brown Fish Owl", "filename": "7748_BrownFishOwl.jpg", "location": "Billigiri Ranga Tiger Reserve", "year": "2015" },
  { "id": "7940", "caption": "White-browed Wagtail", "filename": "7940_White-browedWagtail.jpg", "location": "Billigiri Ranga Tiger Reserve", "year": "2015" },
  { "id": "7985", "caption": "Indian White-eye", "filename": "7985_OrientalWhite-eye.jpg", "location": "Billigiri Ranga Tiger Reserve", "year": "2015" },
  { "id": "7986", "caption": "Indian White-eye", "filename": "7986_OrientalWhite-eye_neat.jpg", "location": "Billigiri Ranga Tiger Reserve", "year": "2015" },
  { "id": "8000", "caption": "Jerdons Leafbird", "filename": "8000_JerdonsLeafbird.jpg", "location": "Billigiri Ranga Tiger Reserve", "year": "2015" },
  { "id": "8386", "caption": "Golden-fronted Leafbird", "filename": "8386_GoldenFrontedLeafbird.jpg", "location": "Devala", "year": "2016" },
  { "id": "8387", "caption": "Golden-fronted Leafbird", "filename": "8387_GoldenFrontedLeafbird.jpg", "location": "Devala", "year": "2016" },
  { "id": "8469", "caption": "Asian Brown Flycatcher", "filename": "8469_AsianBrownFlycatcher.jpg", "location": "TBD", "year": "2016" },
  { "id": "8487", "caption": "Asian Brown Flycatcher", "filename": "8487_AsianBrownFlycatcher.jpg", "location": "TBD", "year": "2016" },
  { "id": "8654", "caption": "Indian Pitta", "filename": "8654_IndianPitta.jpg", "location": "Devala", "year": "2016" },
  { "id": "8769", "caption": "Great Tit", "filename": "8769_GreatTit.jpg", "location": "Hesaraghatta", "year": "2016" },
  { "id": "8791", "caption": "Clamorous Reed-Warbler", "filename": "8791_Clamorous_Reed-Warbler.jpg", "location": "Hesaraghatta", "year": "2016" },
  { "id": "8850", "caption": "White-throated Kingfisher", "filename": "8850_WhiteBreastedKingfisher.jpg", "location": "Hesaraghatta", "year": "2016" },
  { "id": "8875", "caption": "Magpie Robin", "filename": "8875_OrientalMagpieRobin.jpg", "location": "Hesaraghatta", "year": "2016" },
  { "id": "8882", "caption": "Pied Bushchat", "filename": "8882_PiedBushchat.jpg", "location": "Hesaraghatta", "year": "2016" },
  { "id": "8947", "caption": "Ashy Drongo", "filename": "8947_AshyDrongo.jpg", "location": "Hesaraghatta", "year": "2016" },
  { "id": "8962", "caption": "Ashy Drongo", "filename": "8962_AshyDrongo.jpg", "location": "Hesaraghatta", "year": "2016" },
  { "id": "8970", "caption": "Indian Roller", "filename": "8970_IndianRoller.jpg", "location": "Hesaraghatta", "year": "2016" },
  { "id": "8979", "caption": "Indian Roller", "filename": "8979_IndianRoller.jpg", "location": "Hesaraghatta", "year": "2016" },
  { "id": "9035", "caption": "Ashy-crowned SparrowLark", "filename": "9035_Ashy-crownedSparrowLark.jpg", "location": "Hesaraghatta", "year": "2016" },
  { "id": "9040", "caption": "Ashy-crowned SparrowLark", "filename": "9040_Ashy-crownedSparrowLark.jpg", "location": "Hesaraghatta", "year": "2016" },
  { "id": "9045", "caption": "Ashy-crowned SparrowLark", "filename": "9045_Ashy-crownedSparrowLark.jpg", "location": "Hesaraghatta", "year": "2016" },
  { "id": "9088", "caption": "Grey Heron", "filename": "9088_GreyHeron.jpg", "location": "Hosakote Lake", "year": "2016" }
];