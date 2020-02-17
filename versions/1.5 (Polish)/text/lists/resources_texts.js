const texts = {
'Cabled Vein (Dragon King)': {'label':'', 'type': 'organ', 'text': 'A dense bundle of bloody tubes.<br\><br\><i>Szansa wylosowania: 2/21.</i>'},
'Dragon Iron (Dragon King)': {'label':'', 'type': 'żelazo', 'text': 'It feels heavy, but when dropped, falls as slowly as a feather.<br\><br\><i>Szansa wylosowania: 1/21.</i>'},
'Hardened Ribs (Dragon King)': {'label':'', 'type': 'kość', 'text': 'Strong, flexible, and hollow.<br\><br\><i>Szansa wylosowania: 1/21.</i>'},
'Horn Fragment (Dragon King)': {'label':'', 'type': 'kość', 'text': 'Nearby speech causes them to resonate.<br\><br\><i>Szansa wylosowania: 4/21.</i>'},
'Husk (Dragon King)': {'label':'', 'type': 'skóra', 'text': 'A decaying layer of former skin.<br\><br\><i>Szansa wylosowania: 3/21.</i>'},
'King\'s Claws (Dragon King)': {'label':'', 'type': 'kość', 'text': 'Disturbingly warm, and sharp enough to draw blood with a touch.<br\><br\><i>Szansa wylosowania: 4/21.</i>'},
'King\'s Tongue (Dragon King)': {'label':'', 'type': 'skóra', 'text': 'Smooth, dry, and sharp.<br\><br\><i>Szansa wylosowania: 1/21.</i>'},
'Radioactive Drug (Dragon King)': {'label':'', 'type': 'organ/złom', 'text': 'Gives off smoke with an acrid odor.<br\><br\><i>Szansa wylosowania: 2/21.</i>'},
'Veined Wing (Dragon King)': {'label':'', 'type': 'skóra', 'text': 'Blood drips from it at a constant rate.<br\><br\><i>Szansa wylosowania: 3/21.</i>'},

'Beetle Horn (Dung Beetle Knight)': {'label':'', 'type': 'kość', 'text': '<i>Szansa wylosowania: 1/11.</i>'},
'Century Fingernails (Dung Beetle Knight)': {'label':'', 'type': 'kość', 'text': 'These nails are never clipped. Instead, they are folded and hammered hundreds of times into an impossibly fine edge.<br\><br\><i>Szansa wylosowania: 2/11.</i>'},
'Century Shell (Dung Beetle Knight)': {'label':'', 'type': 'skóra/żelazo', 'text': 'This ancient and mineral-rich armor plate is covered with razor wind scratches. You may spend this as if it were a Scarab Shell resource.<br\><br\><i>Szansa wylosowania: 1/11.</i>'},
'Compound Eye (Dung Beetle Knight)': {'label':'', 'type': 'organ/jadalny', 'text': 'A cluster of differently colored eyes, each filled with a creamy, tangy syrup. If you have 3+ courage, you may consume and archive this to gain +3d10 insanity.<br\><br\><i>Szansa wylosowania: 1/11.</i>'},
'Elytra (Dung Beetle Knight)': {'label':'', 'type': 'kość/skóra/organ', 'text': 'The ribbed underside of these large shells makes an ideal surface to grind weapons. A survivor may archive this to give all of their attacks in the next showdown Sharp.<br\><br\><i>Szansa wylosowania: 1/11.</i>'},
'Scarab Shell (Dung Beetle Knight)': {'label':'', 'type': 'skóra', 'text': 'Cool and oily to the touch. Lantern light reveals a brilliant band of color dancing on its surface.<br\><br\><i>Szansa wylosowania: 3/11.</i>'},
'Scarab Wing (Dung Beetle Knight)': {'label':'', 'type': 'organ', 'text': 'When soaked in water, these vein-filled wings gain some elasticity.<br\><br\><i>Szansa wylosowania: 1/11.</i>'},
'Underplate Fungus (Dung Beetle Knight)': {'label':'', 'type': 'zioło/skóra/jadalny', 'text': 'A corkscrew-shaped fungus that grows in the empty channels between the Dung Beetle Knight\'s armor plating.<br\><br\><i>Szansa wylosowania: 1/11.</i>'},

'Lantern Bloom (Flower Knight)': {'label':'', 'type': 'kwiat/skóra', 'text': 'Perishable.<br/>You may consume and archive this during the showdown to gain +3 luck tokens, -1 permanent luck, and the Flower Addiction disorder.<br\>vSzansa wylosowania: 3/14.</i>'},
'Lantern Bud (Flower Knight)': {'label':'', 'type': 'kwiat/złom', 'text': 'Perishable.<br/>You may consume and archive this during the settlement phase to gain +3 [Endeavor], skip the next hunt, and gain the Flower Addiction disorder.<br\><br\><i>Szansa wylosowania: 1/14.</i>'},
'Osseous Bloom (Flower Knight)': {'label':'', 'type': 'kwiat/kość', 'text': 'Perishable.<br/>You may consume and archive this during the showdown to remove all your bleeding and negative attribute tokens and gain the Flower Addiction disorder.<br\><br\><i>Szansa wylosowania: 5/14.</i>'},
'Sighing Bloom (Flower Knight)': {'label':'', 'type': 'kwiat/organ', 'text': 'Perishable.<br/>You may consume and archive this during the showdown to gain 3 survival, 3 insanity, and the Flower Addiction disorder.<br\><br\><i>Szansa wylosowania: 3/14.</i>'},
'Warbling Bloom (Flower Knight)': {'label':'', 'type': 'kwiat/skóra', 'text': 'Perishable.<br/>You may plant this during the settlement phase to archive it and gain +1 population. The survivor is born with the Flower Addiction disorder and a face just like the Warbling Bloom\'s.<br\><br\><i>Szansa wylosowania: 2/14.</i>'},

'Acid Gland (Gorm)': {'label':'', 'type': 'organ', 'text': 'Melts skin.<br\><br\><i>Szansa wylosowania: 1/21.</i>'},
'Dense Bone (Gorm)': {'label':'', 'type': 'kość', 'text': 'Sturdy.<br\><br\><i>Szansa wylosowania: 2/21.</i>'},
'Gorm Brain (Gorm)': {'label':'', 'type': 'organ', 'text': 'Shockingly small.<br\><br\><i>Szansa wylosowania: 1/21.</i>'},
'Handed Skull (Gorm)': {'label':'', 'type': 'kość', 'text': 'Incomparably dense.<br\><br\><i>Szansa wylosowania: 1/21.</i>'},
'Jiggling Lard (Gorm)': {'label':'', 'type': 'organ/skóra', 'text': 'Thick, quivering mass.<br\><br\><i>Szansa wylosowania: 2/21.</i>'},
'Mammoth Hand (Gorm)': {'label':'', 'type': 'kość/skóra/organ', 'text': 'An enormous, blanky glove.<br\><br\><i>Szansa wylosowania: 2/21.</i>'},
'Meaty Rib (Gorm)': {'label':'', 'type': 'kość/organ', 'text': 'Useful and delicious.<br\><br\><i>Szansa wylosowania: 2/21.</i>'},
'Milky Eye (Gorm)': {'label':'', 'type': 'organ', 'text': 'When this resource is gained, select a survivor to gain +3 insanity.<br\><br\><i>Szansa wylosowania: 1/21.</i>'},
'Stout Heart (Gorm)': {'label':'', 'type': 'organ', 'text': 'A titanic pump.<br\><br\><i>Szansa wylosowania: 2/21.</i>'},
'Stout Hide (Gorm)': {'label':'', 'type': 'skóra', 'text': 'Touch, wrinkly skin.<br\><br\><i>Szansa wylosowania: 4/21.</i>'},
'Stout Kidney (Gorm)': {'label':'', 'type': 'organ', 'text': 'Consume: archive this and roll 1d10. On a result of 6+, gain 10 survival. Otherwise reduce your survival to 0.<br\><br\><i>Szansa wylosowania: 2/21.</i>'},
'Stout Vertebrae (Gorm)': {'label':'', 'type': 'kość', 'text': 'Hefty and intricately joined.<br\><br\><i>Szansa wylosowania: 1/21.</i>'},

'Bird Beak (Phoenix)': {'label':'Dziób Feniksa (Feniks)', 'type': 'kość', 'text': 'Niezwykle uzębiony.<br\><br\><i>Szansa wylosowania: 1/24.</i>'},
'Black Skull (Phoenix)': {'label':'Czarna czaszka (Feniks)', 'type': 'żelazo/czaszka/kość', 'text': 'Bardzo stara.<br\><br\><i>Szansa wylosowania: 1/24.</i>'},
'Hollow Wing Bones (Phoenix)': {'label':'Kość ptasiego skrzydła (Feniks)', 'type': 'kość', 'text': 'Delikatne i świetnie wyważone.<br\><br\><i>Szansa wylosowania: 3/24.</i>'},
'Muculent Droppings (Phoenix)': {'label':'Cuchnące odchody (Feniks)', 'type': 'organ', 'text': 'Papierowa łupina o delikatnej woni.<br\><br\><i>Szansa wylosowania: 3/24.</i>'},
'Phoenix Eye (Phoenix)': {'label':'Oko Feniksa (Feniks)', 'type': 'organ/złom', 'text': 'Wypełnione gęstym, metalicznym płynem.<br\><br\><i>Szansa wylosowania: 1/24.</i>'},
'Phoenix Finger (Phoenix)': {'label':'Palec Feniksa (Feniks)', 'type': 'kość', 'text': 'Kiedy go otrzymujesz, wybrany przez Ciebie Ocalały otrzymuje +3 obłędu.<br\><br\><i>Szansa wylosowania: 2/24.</i>'},
'Phoenix Whisker (Phoenix)': {'label':'Wąsy Feniksa (Feniks)', 'type': 'skóra', 'text': 'Delikatne ale bardzo wytrzymałe.<br\><br\><i>Szansa wylosowania: 1/24.</i>'},
'Pustules (Phoenix)': {'label':'Krosty (Feniks)', 'type': 'organ/jadalny', 'text': 'Pachną apetycznie.<br\><br\><i>Szansa wylosowania: 2/24.</i>'},
'Rainbow Droppings (Phoenix)': {'label':'Tęczowe odchody (Feniks)', 'type': 'organ/jadalny', 'text': 'Spożycie: Zarchiwizuj i rzuć 1k10. Przy 7+, zyskujesz na stałe +1 szybkości. W przeciwnym wypadku twoje serce eksploduje i natychmiast umierasz.<br\><br\><i>Szansa wylosowania: 1/24.</i>'},
'Shimmering Halo (Phoenix)': {'label':'Połyskliwy kłąb (Feniks)', 'type': 'organ', 'text': 'Zadziwiająco ciężki.<br\><br\><i>Szansa wylosowania: 1/24.</i>'},
'Small Feathers (Phoenix)': {'label':'Małe pióra (Feniks)', 'type': 'skóra', 'text': 'Miękki środek z ostrymi jak brzytwa brzegami.<br\><br\><i>Szansa wylosowania: 3/24.</i>'},
'Small Hand Parasites (Phoenix)': {'label':'Zarobaczywiona rączka (Feniks)', 'type': 'organ', 'text': 'Wciąż się wije.<br\><br\><i>Szansa wylosowania: 1/24.</i>'},
'Tail Feathers (Phoenix)': {'label':'Pióro ogonowe (Feniks)', 'type': 'skóra', 'text': 'Lżejsze niż powietrze.<br\><br\><i>Szansa wylosowania: 3/24.</i>'},
'Wishbone (Phoenix)': {'label':'Mostek (Feniks)', 'type': 'kość', 'text': 'Delikatna kość o dziwnej aurze.<br\><br\><i>Szansa wylosowania: 1/24.</i>'},

'Beast Steak (Screaming Antelope)': {'label':'Stek Bestii (Wrzeszcząca Antylopa)', 'type': 'organ/jadalny', 'text': 'Szokująco apetyczny.<br\><br\><i>Szansa wylosowania: 2/16.</i>'},
'Bladder (Screaming Antelope)': {'label':'Pęcherz (Wrzeszcząca Antylopa)', 'type': 'organ/jadalny', 'text': 'Śmierdzi uryną.<br\><br\><i>Szansa wylosowania: 1/16.</i>'},
'Large Flat Tooth (Screaming Antelope)': {'label':'Duży płaski ząb (Wrzeszcząca Antylopa)', 'type': 'kość', 'text': 'Kiedy go otrzymujesz, wybrany przez Ciebie Ocalały otrzymuje +1 obłędu. Jego powierzchnia jest szorstka i nierówna.<br\><br\><i>Szansa wylosowania: 2/16.</i>'},
'Muscly Gums (Screaming Antelope)': {'label':'Mięsiste dziąsła (Wrzeszcząca Antylopa)', 'type': 'organ/jadalny', 'text': 'Trudne do rozdzielenia na części.<br\><br\><i>Szansa wylosowania: 1/16.</i>'},
'Pelt (Screaming Antelope)': {'label':'Krupon (Wrzeszcząca Antylopa)', 'type': 'skóra', 'text': 'Zgrzebny lecz ciepły.<br\><br\><i>Szansa wylosowania: 4/16.</i>'},
'Screaming Brain (Screaming Antelope)': {'label':'Wrzeszczący Mózg (Wrzeszcząca Antylopa)', 'type': 'organ/jadalny', 'text': 'Spożyj: Zarchiwizuj tę kartę i podnieś swoje przetrwanie do  wysokości aktualnego limitu.<br\><br\><i>Szansa wylosowania: 1/16.</i>'},
'Shank Bone (Screaming Antelope)': {'label':'Kość goleniowa (Wrzeszcząca Antylopa)', 'type': 'kość', 'text': 'Dziwacznie złączone.<br\><br\><i>Szansa wylosowania: 4/16.</i>'},
'Spiral Horn (Screaming Antelope)': {'label':'Spiralny Róg (Wrzeszcząca Antylopa)', 'type': 'kość', 'text': 'Pięknie brzmi kiedy się w niego dmie.<br\><br\><i>Szansa wylosowania: 1/16.</i>'},

'Arachnid Heart (Spidicules)': {'label':'', 'type': 'organ', 'text': 'Cold to the touch, even when freshly removed.<br\><br\><i>Szansa wylosowania: 1/14.</i>'},
'Chitin (Spidicules)': {'label':'', 'type': 'skóra', 'text': 'A flaky, bitter-smelling husk.<br\><br\><i>Szansa wylosowania: 1/14.</i>'},
'Exoskeleton (Spidicules)': {'label':'', 'type': 'skóra', 'text': 'Malleable, interlocking plates.<br\><br\><i>Szansa wylosowania: 1/14.</i>'},
'Eyeballs (Spidicules)': {'label':'', 'type': 'organ', 'text': 'Each points in a different direction.<br\><br\><i>Szansa wylosowania: 1/14.</i>'},
'Large Appendage (Spidicules)': {'label':'', 'type': 'kość', 'text': 'Could come in handy.<br\><br\><i>Szansa wylosowania: 2/14.</i>'},
'Serrated Fangs (Spidicules)': {'label':'', 'type': 'kość', 'text': '<br\><br\><i>Szansa wylosowania: 1/14.</i>'},
'Small Appendages (Spidicules)': {'label':'', 'type': 'skóra', 'text': 'The inner hands look surprisingly human.<br\><br\><i>Szansa wylosowania: 2/14.</i>'},
'Spinnerets (Spidicules)': {'label':'', 'type': 'organ/złom', 'text': 'More complex than any device.<br\><br\><i>Szansa wylosowania: 1/14.</i>'},
'Stomach (Spidicules)': {'label':'', 'type': 'organ', 'text': 'Consume: Archive this card to gain +1 Hunt XP.<br\><br\><i>Szansa wylosowania: 1/14.</i>'},
'Thick Web Silk (Spidicules)': {'label':'', 'type': 'silk/skóra', 'text': 'Impossible to pierce.<br\><br\><i>Szansa wylosowania: 1/14.</i>'},
'Unlaid Eggs (Spidicules)': {'label':'', 'type': 'organ/jadalny', 'text': 'During the settlement phase, you may consume and archive these delicious little eggs to gain 10 survival.<br\><br\><i>Szansa wylosowania: 1/14.</i>'},
'Venom Sac (Spidicules)': {'label':'', 'type': 'organ/jadalny', 'text': 'Consume: Archive this card and roll 1d10. On a 1-5, you die instantly. On a 6+, gain the Death Touch Secret Fighting Art.<br\><br\><i>Szansa wylosowania: 1/14.</i>'},

'Black Lens (Sunstalker)': {'label':'', 'type': 'organ', 'text': 'These eyes are filled with a savory, gluey substance that dries when exposed to air.<br\><br\><i>Szansa wylosowania: 1/24.</i>'},
'Brain Root (Sunstalker)': {'label':'', 'type': 'organ', 'text': 'The strands of the root are strong and elastic. The meat on top is useless.<br\><br\><i>Szansa wylosowania: 1/24.</i>'},
'Cycloid Scales (Sunstalker)': {'label':'', 'type': 'skóra', 'text': 'Extremely reflective and colorful.<br\><br\><i>Szansa wylosowania: 5/24.</i>'},
'Fertility Tentacle (Sunstalker)': {'label':'', 'type': 'organ', 'text': 'This tube-like appendage has a cavity at the base that stores eggs.<br\><br\><i>Szansa wylosowania: 1/24.</i>'},
'Huge Sunteeth (Sunstalker)': {'label':'', 'type': 'kość', 'text': 'These tough but light teeth are made of hundreds of thin layers of kość, separated by rows of dicot stems.<br\><br\><i>Szansa wylosowania: 3/24.</i>'},
'Inner Shadow Skin (Sunstalker)': {'label':'', 'type': 'skóra', 'text': 'This soft, yet rubbery material blocks light.<br\><br\><i>Szansa wylosowania: 1/24.</i>'},
'Prismatic Gills (Sunstalker)': {'label':'', 'type': 'organ', 'text': 'When you gain this, gain the Emotionless disorder. The gills emit a fuzzy color trail.<br\><br\><i>Szansa wylosowania: 1/24.</i>'},
'Shadow Ink Gland (Sunstalker)': {'label':'', 'type': 'organ', 'text': 'The ink can be used to paint shadows that vanish in lantern light.<br\><br\><i>Szansa wylosowania: 1/24.</i>'},
'Shadow Tentacles (Sunstalker)': {'label':'', 'type': 'organ/skóra', 'text': 'When you gain this during the hunt or showdown, return it to the resource deck and draw again if any survivors are blind.<br\><br\><i>Szansa wylosowania: 2/24.</i>'},
'Shark Tongue (Sunstalker)': {'label':'', 'type': 'organ', 'text': 'So slippery that it\'s hard to hold!<br\><br\><i>Szansa wylosowania: 1/24.</i>'},
'Small Sunteeth (Sunstalker)': {'label':'', 'type': 'kość', 'text': 'Unlike the large sunteeth, these are extremely sharp and clean.<br\><br\><i>Szansa wylosowania: 3/24.</i>'},
'Stink Lung (Sunstalker)': {'label':'', 'type': 'organ', 'text': 'When squeezed, a funny noise emerges followed by a tantalizing aroma.<br\><br\><i>Szansa wylosowania: 1/24.</i>'},
'Sunshark Blubber (Sunstalker)': {'label':'', 'type': 'organ', 'text': 'When inflated with air, this blubber gently floats.<br\><br\><i>Szansa wylosowania: 1/24.</i>'},
'Sunshark Bone (Sunstalker)': {'label':'', 'type': 'kość', 'text': 'The center is filled with water.<br\><br\><i>Szansa wylosowania: 1/24.</i>'},
'Sunshark Fin (Sunstalker)': {'label':'', 'type': 'kość/skóra', 'text': 'Removing the slimy hands reveals a curable, viscous substance.<br\><br\><i>Szansa wylosowania: 1/24.</i>'},

'Curious Hand (White Lion)': {'label':'Dziwna dłoń (Biały Lew)', 'type': 'skóra', 'text': 'Kiedy ją zdobywasz, losowy Ocalały otrzymuje +1 obłędu.<br\><br\><i>Szansa wylosowania: 1/19.</i>'},
'Eye of Cat (White Lion)': {'label':'Kocie oko (Biały Lew)', 'type': 'organ/jadalny', 'text': 'Doskonale zachowane oko.<br\><br\><i>Szansa wylosowania: 1/19.</i>'},
'Golden Whiskers (White Lion)': {'label':'Złote wąsy (Biały Lew)', 'type': 'organ', 'text': 'Te wąsy są twarde!<br\><br\><i>Szansa wylosowania: 1/19.</i>'},
'Great Cat Bones (White Lion)': {'label':'Kości wielkiego kota (Biały Lew)', 'type': 'kość', 'text': 'Mocne i zaskakująco lekkie<br\><br\><i>Szansa wylosowania: 4/19.</i>'},
'Lion Claw (White Lion)': {'label':'Lwi pazur (Biały Lew)', 'type': 'kość', 'text': 'Ostry jak brzytwa, chowany pazur.<br\><br\><i>Szansa wylosowania: 3/19.</i>'},
'Lion Tail (White Lion)': {'label':'Lwi ogon (Biały Lew)', 'type': 'skóra', 'text': 'Jest zaskakująco ciężki.<br\><br\><i>Szansa wylosowania: 1/19.</i>'},
'Lion Testes (White Lion)': {'label':'Jądra lwa (Biały Lew)', 'type': 'organ/jadalny', 'text': 'Para masywnych "orzechów".<br\><br\><i>Szansa wylosowania: 1/19.</i>'},
'Shimmering Mane (White Lion)': {'label':'Lśniąca grzywa (Biały Lew)', 'type': 'skóra', 'text': 'Zarchiwizuj ją, by otrzymać 2 podstawowe zasoby - skóra.<br\><br\><i>Szansa wylosowania: 1/19.</i>'},
'Sinew (White Lion)': {'label':'Ścięgno (Biały Lew)', 'type': 'organ', 'text': 'Te żylaste wnętrzności są całkiem przydatne.<br\><br\><i>Szansa wylosowania: 2/19.</i>'},
'White Fur (White Lion)': {'label':'Białe futro (Biały Lew)', 'type': 'skóra', 'text': 'Luksusowe i miękkie w dotyku.<br\><br\><i>Szansa wylosowania: 4/19.</i>'},

'??? (Basic)': {'label':'??? (Podstawowy)', 'type': 'organ/kość/skóra/jadalny', 'text': 'Nie masz pojęcia co to za część potwora. Może być użyte jako kość, organ lub skóra!<br\><br\><i>Szansa wylosowania: 2/21.</i>'},
'Broken Lantern (Basic)': {'label':'Zniszczona latarnia (Podstawowy)', 'type': 'złom', 'text': 'Pozostałość po zgaszonej latarni.<br\><br\><i>Szansa wylosowania: 2/21.</i>'},
'Love Juice (Basic)': {'label':'Miłosny sok (Podstawowy)', 'type': 'organ/jadalny', 'text': 'Podczas fazy osady możesz zarchiwizować tą kartę aby zainicjować współżycie. Wybrani Ocalali muszą być w stanie spożywać.<br\><br\><i>Szansa wylosowania: 2/21.</i>'},
'Monster Bone (Basic)': {'label':'Kość potwora (Podstawowy)', 'type': 'kość', 'text': 'Kość nadająca się do produkcji.<br\><br\><i>Szansa wylosowania: 4/21.</i>'},
'Monster Hide (Basic)': {'label':'Skóra potwora (Podstawowy)', 'type': 'skóra', 'text': 'Skóra z bestii.<br\><br\><i>Szansa wylosowania: 7/21.</i>'},
'Monster Organ (Basic)': {'label':'Organ potwora (Podstawowy)', 'type': 'organ/jadalny', 'text': 'Jeśli to spożyjesz, zarchiwizuj tę kartę. Rzuć 1k10. Przy wyniku 6+ zarażasz się pasożytami. Natychmiast zarchiwizuj cały jadalny ekwipunek ze swojej siatki ekwipunku.<br\><br\><i>Szansa wylosowania: 3/21.</i>'},
'Skull (Basic)': {'label':'Czaszka (Podstawowy)', 'type': 'kość', 'text': 'Kiedy ją otrzymujesz, Ocalały którego wybierzesz otrzymuje +1 obłędu.<br\><br\><i>Szansa wylosowania: 1/21.</i>'},


'Black Lichen (Strange)': {'label':'Czarny porost (Dziwny)', 'type': 'kość/organ/skóra/jadalny/inny', 'text': 'Plastyczny, ostry i interesujący. Możesz go spożyć. Jeśli to zrobisz, usta stają się szare, włosy bieleją i stajesz się bezpłodny. Otrzymujesz +1 odwagi, +1 wiedzy i otrzymujesz ciężki uraz talii zniszczone genitalia.'},
'Cocoon Membrane (Strange)': {'label':'Membrana kokonu (Dziwny)', 'type': 'organ/inny', 'text': 'Cienkie miedziane włosy przenikają tę galaretowatą substancję.  Latarnie są odpychane przez te miedziane włosy. Światło załamuje się aby ich uniknąć.'},
'Elder Cat Teeth (White Lion/Strange)': {'label':'Zęby starszego kota (Biały Lew/Dziwny)', 'type': 'kość', 'text': 'Są tak ostre, jak dziwne.'},
'Fresh Acanthus (Strange)': {'label':'Świeży ciemiernik (Dziwny)', 'type': 'zioło', 'text': 'Zarchiwizuj, by w pełni wyleczyć 1 miejsce trafienia, w tym poziomy obrażeń i punkty pancerza.'},
'Iron (Strange)': {'label':'Żelazo (Dziwny)', 'type': 'złom/żelazo', 'text': 'Twardsze niż kość.'},
'Lantern Tube (Strange)': {'label':'Latarniany jajowód (Dziwny)', 'type': 'organ/złom', 'text': 'Cielisty, wyściełany mięśniami jajowód. Gdy go otrzymujesz rzuć 1k10. Na 6+ znajdujesz coś co utknęło w środku! Dodaj do magazynu osady 1 podstawowy zasób zniszczona latarnia.'},
'Leather (Strange)': {'label':'Blank (Dziwny)', 'type': 'skóra/blank', 'text': 'Nigdy nie wychodzi z mody.'},
'Legendary Horns (Screaming Antelope/Strange)': {'label':'Legendarne rogi (Wrzeszcząca Antylopa/Dziwny)', 'type': 'kość/złom', 'text': 'Posiadanie ich napełnia cię mocą.'},
'Perfect Crucible (Strange)': {'label':'Perfekcyjny tygiel (Dziwny)', 'type': 'żelazo', 'text': 'Kiedy produkujesz w tym tyglu, do powietrza uwalniają się starożytne bakterie. Strać 1k10 populacji i zarchiwizuj tę kartę.'},
'Phoenix Crest (Phoenix/Strange)': {'label':'Grzebień Feniksa (Feniks/Dziwny)', 'type': 'organ', 'text': 'Mocny i giętki.'},
'Second Heart (Screaming Antelope/Strange)': {'label':'Drugie serce (Wrzeszcząca Antylopa/Dziwny)', 'type': 'organ/kość', 'text': 'Wciąż próbuje cię ugryźć.'},

'1,000 Year Sunspot (Sunstalker/Strange)': {'label':'', 'type': 'kość/organ', 'text': ''},
'3,000 Year Sunspot (Sunstalker/Strange)': {'label':'', 'type': 'kość/organ/złom', 'text': ''},
'Active Thyroid (Gorm/Strange)': {'label':'', 'type': 'organ/jadalny', 'text': ''},
'Blistering Plasma Fruit (Lonely Tree/Strange)': {'label':'', 'type': 'organ/jadalny', 'text': ''},
'Bugfish (Sunstalker/Strange)': {'label':'', 'type': 'fish/organ', 'text': ''},
'Canopic Jar (Lion God/Strange)': {'label':'', 'type': 'organ/złom', 'text': ''},
'Crimson Vial (Manhunter/Strange)': {'label':'', 'type': 'żelazo/jadalny', 'text': ''},
'Crystal Sword Mold (Slenderman/Strange)': {'label':'', 'type': 'złom/żelazo', 'text': ''},
'Dark Water (Slenderman/Strange)': {'label':'', 'type': 'inny', 'text': ''},
'Drifting Dream Fruit (Lonely Tree/Strange)': {'label':'', 'type': 'jadalny', 'text': ''},
'Gormite (Gorm/Strange)': {'label':'', 'type': 'złom/żelazo', 'text': ''},
'Hagfish (Sunstalker/Strange)': {'label':'', 'type': 'fish/kość/skóra', 'text': ''},
'Jagged Marrow Fruit (Lonely Tree/Strange)': {'label':'', 'type': 'kość/złom/jadalny', 'text': ''},
'Jowls (Sunstalker/Strange)': {'label':'', 'type': 'fish/żelazo', 'text': ''},
'Lonely Fruit (Lonely Tree/Strange)': {'label':'', 'type': 'jadalny', 'text': ''},
'Old Blue Box (Lion God/Strange)': {'label':'', 'type': 'złom', 'text': ''},
'Pituitary Gland (Dragon King/Strange)': {'label':'', 'type': 'organ', 'text': ''},
'Porous Flesh Fruit (Lonely Tree/Strange)': {'label':'', 'type': 'skóra/jadalny', 'text': ''},
'Preserved Caustic Dung (Dung Beetle Knight/Strange)': {'label':'', 'type': 'organ/jadalny/dung', 'text': ''},
'Pure Bulb (Gorm/Strange)': {'label':'', 'type': '', 'text': 'organ'},
'Radiant Heart (Dragon King/Strange)': {'label':'', 'type': 'organ', 'text': ''},
'Red Vial (Manhunter/Strange)': {'label':'', 'type': 'jadalny', 'text': ''},
'Salt (Sunstalker/Strange)': {'label':'', 'type': 'salt', 'text': ''},
'Scell (Dung Beetle Knight/Strange)': {'label':'', 'type': 'organ/jadalny', 'text': ''},
'Sarcophagus (Lion God/Strange)': {'label':'', 'type': 'żelazo', 'text': ''},
'Shining Liver (Dragon King/Strange)': {'label':'', 'type': 'organ', 'text': ''},
'Silken Nervous System (Spidicules/Strange)': {'label':'', 'type': 'organ', 'text': ''},
'Silver Urn (Lion God/Strange)': {'label':'', 'type': 'kość/złom', 'text': ''},
'Stomach Lining (Gorm/Strange)': {'label':'', 'type': 'organ', 'text': ''},
'Sunstones (Sunstalker/Strange)': {'label':'', 'type': 'kość', 'text': ''},
'Triptych (Lion God/Strange)': {'label':'', 'type': 'skóra/złom', 'text': ''},
'Web Silk (Spidicules/Strange)': {'label':'', 'type': 'silk', 'text': ''},
}

module.exports = {
 texts,
}
