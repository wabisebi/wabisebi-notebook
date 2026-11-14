/* Shared by every page in pages/: builds the top bar with the search, the card grid on the home page, the audio buttons and the footer.
   To add a grammar point: add one line to its category below. [file name without .html, pattern, short description]
   Categories run in learning order, and so do the points inside each one. A category with no pages yet doesn't show.
   The short description shows on the home grid card AND under the pattern on the page itself (filled in below), so it only lives here. */
var INDEX = [
  {level: 'N5', cats: [
    {cat: 'First steps', pages: [
      ['desu', 'です / だ', 'To be, is'],
      ['janai', 'じゃない・ではありません', 'Is not'],
      ['deshita', 'でした・だった', 'Was'],
      ['janakatta', 'じゃなかった・ではありませんでした', 'Was not'],
      ['wa', 'は', 'Topic marker: "as for..."'],
      ['ka', 'か', 'Question marker'],
      ['kore-sore-are', 'これ・それ・あれ', 'This, that, that over there'],
      ['kono-sono-ano', 'この・その・あの', 'This ___, that ___ (before a noun)'],
      ['koko-soko-asoko', 'ここ・そこ・あそこ', 'Here, there, over there'],
      ['kochira-sochira-achira', 'こちら・そちら・あちら', 'This way, that way (polite here, there)'],
      ['gaaru', 'がある', 'To be, there is'],
      ['gairu', 'がいる', 'There is (people, animals)'],
      ['aru-noun', 'がある + Noun', 'With, that has, who has'],
      ['tachi', '～たち', 'Plural for people']
    ]},
    {cat: 'Question words', pages: [
      ['nani', '何 (なに・なん)', 'What'],
      ['dare', '誰 (だれ)・どなた', 'Who (polite: どなた)'],
      ['doko', 'どこ', 'Where'],
      ['itsu', 'いつ', 'When'],
      ['dore', 'どれ', 'Which (of three or more)'],
      ['dono', 'どの', 'Which (of three or more)'],
      ['dochira', 'どちら・どっち', 'Which (of two), which way'],
      ['dou', 'どう・いかが', 'How, how about'],
      ['donna', 'どんな', 'What kind of'],
      ['doushite', 'どうして・なぜ', 'Why (casual: なんで)'],
      ['ikura', 'いくら', 'How much (money)'],
      ['ikutsu', 'いくつ', 'How many, how old'],
      ['nanika', '何か・誰か・どこか', 'Something, someone, somewhere'],
      ['nanimo', '何も・誰も・どこも', 'Nothing, nobody, nowhere (+ negative)'],
      ['nandemo', '何でも・誰でも・どこでも', 'Anything, anyone, anywhere']
    ]},
    {cat: 'Particles', pages: [
      ['mo', 'も', 'Also, too'],
      ['to', 'と', 'And: joining nouns'],
      ['ya', 'や', 'And: listing examples (among others)'],
      ['ka-or', 'か (Or)', 'Or: joining nouns'],
      ['ga', 'が', 'Subject marker'],
      ['wo', 'を', 'Object marker'],
      ['ni', 'に', 'In, at, to, for, on'],
      ['he', 'へ', 'Towards, to (direction)'],
      ['de', 'で', 'At, in'],
      ['de-means', 'で (Means)', 'By, with: what you use'],
      ['to-with', 'と (With)', 'With: doing something together'],
      ['to-quote', 'と (Quotation)', 'Quoting: と思う, と言う (casual: って)'],
      ['no-pos', 'の (Possession)', 'Possession: my, \'s'],
      ['no-noun', 'の (Noun left out)', 'Mine, yours'],
      ['kara', 'から (From)', 'From: starting point (place, time, person)'],
      ['made', 'まで', 'Until, up to, even'],
      ['niwa', 'には・では・にも', 'Particle + は or も: に and で stay, が and を go'],
      ['dake', 'だけ', 'Only, just'],
      ['shika', 'しか～ない', 'Only, nothing but (+ negative)'],
      ['kurai', 'ぐらい・くらい', 'About, roughly'],
      ['goro', 'ごろ (頃)', 'Around (a time)']
    ]},
    {cat: 'Sentence endings', pages: [
      ['yo', 'よ', "I'm telling you (emphasis)"],
      ['ne', 'ね', 'Sharing a feeling: "right?", "huh"'],
      ['yone', 'よね', '"Right?" when you\'re fairly sure'],
      ['na-end', 'な・なあ', 'Casual "huh", a feeling said out loud'],
      ['deshou', 'でしょう', 'Probably, right?'],
      ['darou', 'だろう', 'Probably, I wonder (masculine "right?")']
    ]},
    {cat: 'Adjectives', pages: [
      ['i-adj', 'い-Adjective', 'Describing words that end in い'],
      ['ii', 'いい (良い)', 'い-Adjective meaning "good"'],
      ['na-adj', 'な-Adjective', 'Describing words: な before a noun'],
      ['i-adj-neg', 'い-Adjective (Negative)', 'Isn\'t: くない'],
      ['i-adj-past', 'い-Adjective (Past)', 'Was: the past of い-adjectives'],
      ['i-adj-past-neg', 'い-Adjective (Past negative)', 'Wasn\'t: くなかった'],
      ['na-adj-neg', 'な-Adjective (Negative)', 'Isn\'t: じゃない'],
      ['na-adj-past', 'な-Adjective (Past)', 'Was: だった and でした'],
      ['suki-kirai', '好き・嫌い', 'Like, dislike (～が好き)'],
      ['noga-suki', '～のが好き', 'Like doing something'],
      ['jouzu-heta', '上手・下手', 'Good at, bad at (～が上手)'],
      ['naru', '～くなる・～になる', 'To become, to get (bigger, colder...)'],
      ['sugiru', '～すぎる', 'Too much, overdoing it'],
      ['adverb-ku-ni', '～く・～に (Adverbs)', 'Describing verbs, how you do it'],
      ['yori', 'より・～の方が', 'Comparing: than, ___ is more'],
      ['ichiban', '一番 (いちばん)', 'The most, number one']
    ]},
    {cat: 'Adverbs', pages: [
      ['totemo', 'とても', 'Very'],
      ['chotto', 'ちょっと', 'A little, a bit (and softening)'],
      ['takusan', 'たくさん', 'A lot, many'],
      ['zenbu', '全部 (ぜんぶ)', 'All, everything'],
      ['kekkou', 'けっこう (結構)', 'Quite, pretty; no thanks'],
      ['amari', 'あまり～ない', 'Not very, not much'],
      ['zenzen', '全然～ない', 'Not at all'],
      ['itsumo', 'いつも・よく・時々・たまに', 'Always, often, sometimes, once in a while'],
      ['mou', 'もう', 'Already, soon, now (not anymore, with negative)'],
      ['mada', 'まだ', 'Still, not yet']
    ]},
    {cat: 'Verbs: basic forms', pages: [
      ['masu', 'ます', 'Polite verb endings'],
      ['ru-verb', 'る-Verb (Dictionary)', 'Ichidan verbs: plain and polite'],
      ['u-verb', 'う-Verb (Dictionary)', 'Godan verbs: plain and polite'],
      ['ru-verb-neg', 'る-Verb (Negative)', 'Not doing: ない and ません'],
      ['u-verb-neg', 'う-Verb (Negative)', 'Not doing: u sound → a + ない'],
      ['ru-verb-past', 'る-Verb (Past)', 'Did: た and ました'],
      ['u-verb-past', 'う-Verb (Past)', 'Did: った, んだ, いた and ました'],
      ['verb-past-neg', 'Verb (Past negative)', 'Didn\'t: なかった and ませんでした'],
      ['kuru', '来る', 'To come (irregular verb)'],
      ['suru', 'する', 'To do (irregular verb)'],
      ['verb-noun', 'Verb + Noun', 'Describing a noun with a verb'],
      ['ga-no', 'が → の', 'が can become の when describing a noun'],
      ['ni-suru', '～にする', 'To decide on, go with'],
      ['ta-koto', '～たことがある', 'Have done before (experience)'],
      ['koto-ga-dekiru', '～ことができる', 'Can, be able to'],
      ['hou-ga-ii', '～た方がいい・～ない方がいい', 'Should, had better / shouldn\'t'],
      ['ni-iku', '～に行く・～に来る', 'Go to do, come to do'],
      ['na-dont', '～な (Don\'t)', 'Don\'t! (blunt order)']
    ]},
    {cat: 'て-form', pages: [
      ['te-form', 'て-Form', 'Unfinished verb: lots of grammar builds on it'],
      ['te-and', '～て (And then)', 'Joining actions: do this, then that'],
      ['kute-de', '～くて・～で', 'And: joining adjectives and nouns'],
      ['te-kudasai', '～てください', 'Please do (request)'],
      ['naide-kudasai', '～ないでください', 'Please don\'t'],
      ['teiru', '～ている (Doing now)', 'Ongoing action'],
      ['teiru-state', '～ている (State)', 'Lives in, is married: a state that lasts'],
      ['teiru-habit', '～ている (Habit)', 'Things you do regularly'],
      ['mada-teinai', 'まだ～ていない', 'Haven\'t done it yet'],
      ['temo-ii', '～てもいい', 'It\'s okay to, may I'],
      ['tewa-ikenai', '～てはいけない・～ちゃいけない', 'Must not'],
      ['nakute-wa', '～なくてはいけない・～なきゃ', 'Must, have to'],
      ['te-kara', '～てから', 'After doing']
    ]},
    {cat: 'Wanting and inviting', pages: [
      ['hoshii', 'ほしい (欲しい)', 'Want (a thing)'],
      ['tai', '～たい', 'Want to (do something)'],
      ['masenka', '～ませんか', 'Won\'t you, why don\'t we (inviting)'],
      ['mashou', '～ましょう', 'Let\'s (casual: ～よう)'],
      ['mashouka', '～ましょうか', 'Shall I, shall we (offering)'],
      ['demo-or', 'でも (Or something)', 'Or something: a soft suggestion'],
      ['tsumori', '～つもりだ', 'Plan to, intend to']
    ]},
    {cat: 'Giving and receiving', pages: [
      ['morau', 'もらう (貰う)', 'To get, to receive'],
      ['ageru', 'あげる', 'To give (to someone else)'],
      ['kureru', 'くれる・てくれる', 'Someone gives me, does something for me']
    ]},
    {cat: 'Joining sentences', pages: [
      ['soshite', 'そして・それから', 'And, and then (start of a sentence)'],
      ['demo', 'でも', 'But (start of a sentence)'],
      ['ga-but', 'が (But)', 'But, however (polite)'],
      ['kedo', 'けど・けれども', 'But (everyday)'],
      ['kara-because', 'から (Because)', 'Because, so: giving a reason'],
      ['node', 'ので', 'Because, so (softer than から)'],
      ['mae-ni', '～前に', 'Before doing something'],
      ['ato-de', '～た後で', 'After (something happens)'],
      ['toki', '～とき (時)', 'When, at the time'],
      ['tari', '～たり～たりする', 'Doing things like A and B']
    ]},
    {cat: 'Explaining (の)', pages: [
      ['no', '～の', 'Asking for the story behind something'],
      ['ndesu', '～んです・のです', 'Explaining, giving the reason'],
      ['noha-noga', 'のは・のが', 'Turning an action into a noun']
    ]}
  ]}
  ,{level: 'N4', cats: [
    {cat: 'Particles', pages: [
      ['toka', 'とか', 'Things like, or something'],
      ['nado', 'など', 'And so on, things like that'],
      ['particle-no', 'Particle + の', 'との, での, からの: a particle before a noun'],
      ['demo-even', 'でも (Even)', 'Even (the least likely case)'],
      ['bakari', 'ばかり', 'Nothing but, only'],
      ['mo-number', 'も (With numbers)', 'As many as, a whole'],
      ['zutsu', 'ずつ', 'Each, at a time'],
      ['madeni', 'までに', 'By (a deadline)'],
      ['tte', 'って', 'Casual は, casual と (quoting)']
    ]},
    {cat: 'Sentence endings', pages: [
      ['kana-wonder', 'かな', 'I wonder (thinking out loud)'],
      ['kashira', 'かしら', 'I wonder (softer)'],
      ['kke', 'っけ・だっけ', 'What was it again?'],
      ['janai-confirm', 'じゃない (Confirming)', 'Isn\'t it? See? (not a negative)']
    ]},
    {cat: 'Guessing and seeming', pages: [
      ['kamoshirenai', 'かもしれない', 'Maybe, might'],
      ['hazu', 'はず', 'Should be, expected to be'],
      ['hazu-ganai', 'はずがない', 'Can\'t possibly be'],
      ['mitai', 'みたい', 'Seems like, looks like'],
      ['you-da', 'ようだ', 'It seems (more formal みたい)'],
      ['sou-looks', '～そう (Looks)', 'Looks like, about to'],
      ['sou-heard', '～そうだ (Heard)', 'I heard that, they say'],
      ['rashii', 'らしい', 'Apparently / typical of'],
      ['ga-suru', '～がする', 'There\'s a smell, a sound, a feeling'],
      ['tatsumori', '～たつもり', 'Believing you did (maybe wrongly)']
    ]},
    {cat: 'Adverbs', pages: [
      ['konnani', 'こんなに・そんなに・あんなに', 'This much, that much'],
      ['nakanaka', 'なかなか～ない', 'Just won\'t, not easily'],
      ['zutto', 'ずっと', 'The whole time, all along / by far'],
      ['kitto', 'きっと', 'Surely, I bet'],
      ['zehi', 'ぜひ', 'By all means, I\'d love to']
    ]},
    {cat: 'Comparing', pages: [
      ['hodo-nai', '～ほど～ない', 'Not as ... as'],
      ['dochira-ga', 'AとBとどちらが', 'Which is more, A or B?'],
      ['to-onaji', '～と同じ', 'The same as'],
      ['no-youni', '～のように・～のような', 'Like, as (like a ___)']
    ]},
    {cat: 'Joining sentences', pages: [
      ['noni', 'のに', 'Even though (and it\'s annoying)'],
      ['shi', '～し', 'And also, and besides (listing reasons)'],
      ['temo', '～ても', 'Even if, even when'],
      ['qword-temo', 'Question word + ても', 'No matter what, who, how'],
      ['nagara', '～ながら', 'While doing (two things at once)'],
      ['naide', '～ないで (Without)', 'Without doing'],
      ['zuni', '～ずに', 'Without doing (more written)'],
      ['te-reason', '～て (Reason)', 'Because (cause of a feeling)'],
      ['tame', '～ため(に)', 'In order to, for / because of'],
      ['youni-so-that', '～ように (So that)', 'So that'],
      ['noni-purpose', '～のに (Purpose)', 'For doing, in order to']
    ]},
    {cat: 'If and when', pages: [
      ['tara', '～たら', 'If, when (once that happens)'],
      ['ba', '～ば', 'If (the conditional form)'],
      ['to-cond', '～と (If)', 'Whenever, if (it always happens)'],
      ['nara', '～なら', 'If that\'s the case, if it\'s about']
    ]},
    {cat: 'Time', pages: [
      ['tokoro', '～ところ', 'About to, in the middle of, just did'],
      ['ta-bakari', '～たばかり', 'Just did (not long ago)'],
      ['aida', '～間・～間に', 'While, during'],
      ['uchini', '～うちに', 'While (before it changes)'],
      ['tamama', '～たまま', 'Leaving it as it is, still'],
      ['hajimeru', '～始める・～出す', 'Start doing'],
      ['owaru', '～終わる', 'Finish doing'],
      ['tsuzukeru', '～続ける', 'Keep doing']
    ]},
    {cat: 'Verb forms', pages: [
      ['potential', 'Potential form', 'Can do it'],
      ['volitional', 'Volitional form', 'Let\'s, I\'ll (casual)'],
      ['you-to-omou', '～ようと思う', 'I\'m thinking of doing'],
      ['passive', 'Passive form', 'Was done (by someone)'],
      ['causative', 'Causative form', 'Make or let someone do'],
      ['causative-passive', 'Causative-passive form', 'Be made to do'],
      ['imperative', 'Imperative form', 'Do it! (blunt order)'],
      ['nasai', '～なさい', 'Do it (from a parent, teacher)']
    ]},
    {cat: 'て-form', pages: [
      ['te-shimau', '～てしまう・～ちゃう', 'End up doing, finish completely'],
      ['te-miru', '～てみる', 'Try doing (and see)'],
      ['te-oku', '～ておく', 'Do in advance, leave it'],
      ['te-aru', '～てある', 'Has been done (and stays)'],
      ['te-iku-kuru', '～ていく・～てくる', 'Go and do, come back; change over time'],
      ['te-hoshii', '～てほしい', 'Want someone to do'],
      ['temo-kamawanai', '～てもかまわない', 'It\'s fine if, I don\'t mind'],
      ['nakutemo-ii', '～なくてもいい', 'Don\'t have to']
    ]},
    {cat: 'Asking and giving', pages: [
      ['te-kuremasenka', '～てくれませんか・～てもらえませんか', 'Could you? (asking a favor)'],
      ['kudasaru', 'くださる・～てくださる', 'Give, do for me (respectful)'],
      ['itadaku', 'いただく・～ていただく', 'Receive, have someone do (humble)'],
      ['te-itadakemasenka', '～ていただけませんか', 'Could you please? (very polite)'],
      ['yaru', 'やる (Give)', 'Give (to animals, plants, people below)']
    ]},
    {cat: 'Changes and decisions', pages: [
      ['you-ni-naru', '～ようになる', 'Come to, become able to'],
      ['you-ni-suru', '～ようにする', 'Make sure to, make a habit of'],
      ['koto-ni-suru', '～ことにする', 'Decide to'],
      ['koto-ni-naru', '～ことになる', 'It\'s been decided that'],
      ['koto-ga-aru', '～ことがある', 'There are times when, sometimes']
    ]},
    {cat: 'Easy, hard, how to', pages: [
      ['yasui', '～やすい', 'Easy to do'],
      ['nikui', '～にくい', 'Hard to do'],
      ['kata', '～方 (How to)', 'How to, the way of doing'],
      ['sa-noun', '～さ', 'Adjective to noun (how much of it)'],
      ['garu', '～がる', 'Someone else seems to feel'],
      ['tagaru', '～たがる', 'Someone else wants to']
    ]},
    {cat: 'Quoting and asking', pages: [
      ['to-iu', 'という', 'Called, named'],
      ['to-iu-koto', '～ということ', 'That means, the fact that'],
      ['ka-embedded', '～か (Inside a sentence)', '(I don\'t know) what, where, when'],
      ['ka-dou-ka', '～かどうか', 'Whether or not'],
      ['you-ni-iu', '～ように言う', 'Tell someone to do']
    ]},
    {cat: 'Turning into a noun', pages: [
      ['koto-noun', '～こと (Doing as a thing)', 'Doing X, as a noun']
    ]},
    {cat: 'Polite speech (Keigo)', pages: [
      ['keigo-respectful', 'Respectful verbs (尊敬語)', 'Raising the other person up'],
      ['keigo-humble', 'Humble verbs (謙譲語)', 'Lowering yourself'],
      ['o-ni-naru', 'お～になる', 'Respectful pattern for any verb'],
      ['o-suru', 'お～する', 'Humble pattern: doing it for someone'],
      ['gozaimasu', 'ございます', 'Very polite ある and です']
    ]}
  ]}
  // Not on the JLPT lists, but common in real speech
  ,{level: 'Non-JLPT', cats: [
    {cat: 'Sentence endings', pages: [
      ['zo', 'ぞ', 'Strong, rough "I\'m telling you"']
    ]}
  ]}
  // N3 is hidden for now (the site is N5-N4 only). To bring it back: uncomment this group and empty HIDDEN in build.py.
  // ,{level: 'N3', cats: [
  //   {cat: 'Casual speech', pages: [
  //     ['sa', 'さ', 'Casual filler: "like", "you know"']
  //   ]}
  // ]}
];
var UPDATED = '14 Nov 2026';
// Extra search words for a page, for forms that live on it but aren't in its pattern (id: 'words').
var ALSO = {'nakute-wa': 'なければならない なければなりません なければいけない なくてはならない なくちゃ なくちゃいけない nakereba naranai nakucha must have to', 'koto-ga-dekiru': 'できる できます dekiru can able', ndesu: 'んだ のだ の nda noda', tachi: '私たち 子どもたち', kurai: 'どのくらい', kekkou: '結構です', tatsumori: 'つもり tsumori think believe', zenbu: 'ぜんぶ 全部で whole in total', 'na-end': 'なあ なぁ naa huh', konnani: 'konnani sonnani annani so not that much', nado: 'nado etc', 'demo-even': 'even', bakari: 'ばっかり bakkari only', 'mo-number': 'mo as many as', zutsu: 'zutsu each', madeni: 'by deadline', tte: 'tte quote という', kashira: 'kashira wonder', kke: 'kke dakke っけ again remember', 'janai-confirm': 'じゃん jan じゃないですか confirm see', kamoshirenai: 'かも kamo かもしれません maybe might', 'hazu-ganai': 'はずない はずはない impossible no way', 'you-da': 'ようです you da seems', 'sou-looks': 'そう sou looks おいしそう よさそう なさそう', 'sou-heard': 'そうです sou hearsay heard they say', rashii: 'rashii apparently typical', 'keigo-respectful': 'いらっしゃる おっしゃる 召し上がる ご覧になる なさる sonkeigo keigo respectful', 'keigo-humble': '申す 参る いたす おる 伺う kenjougo keigo humble', 'o-ni-naru': 'お～になる お帰りになる o ni naru', 'o-suru': 'お～する お待ちします ご案内 o suru', gozaimasu: 'ございます でございます gozaimasu', yasui: 'やすい yasui easy to', nikui: 'にくい nikui hard to', kata: '方 かた kata how to 作り方', 'sa-noun': 'さ sa 高さ 大きさ', garu: 'がる garu 怖がる 欲しがる', tagaru: 'たがる tagaru', 'to-iu': 'という っていう to iu called named', 'to-iu-koto': 'ということ ってこと to iu koto', 'ka-embedded': 'か ka embedded question かわからない', 'ka-dou-ka': 'かどうか ka dou ka whether', 'you-ni-iu': 'ように言う you ni iu tell to', 'koto-noun': 'こと koto nominalize', 'te-kuremasenka': 'てくれない てもらえる kuremasen could you', kudasaru: 'くださる くださいました kudasaru', itadaku: 'いただく いただきます itadaku', 'te-itadakemasenka': 'いただけますか いただけませんか itadakemasen', yaru: 'やる てやる yaru give feed', 'you-ni-naru': 'ようになる you ni naru become able', 'you-ni-suru': 'ようにする you ni suru make sure', 'koto-ni-suru': 'ことにする koto ni suru decide', 'koto-ni-naru': 'ことになる koto ni naru decided', 'koto-ga-aru': 'こともある koto ga aru sometimes', 'te-shimau': 'しまう ちゃう じゃう ちまう shimau chau', 'te-miru': 'てみる temiru try', 'te-oku': 'ておく とく teoku toku in advance', 'te-aru': 'てある tearu', 'te-iku-kuru': 'ていく てくる teiku tekuru', 'te-hoshii': 'てほしい tehoshii want someone', 'temo-kamawanai': 'かまわない かまいません 構わない kamawanai', 'nakutemo-ii': 'なくていい nakutemo don\'t have to', potential: 'potential can られる える 食べられる 行ける kanou', volitional: 'volitional よう おう let\'s ikou', 'you-to-omou': 'ようと思う plan intend', passive: 'passive られる れる ukemi', causative: 'causative させる せる shieki let make', 'causative-passive': 'させられる される made to', imperative: 'imperative command しろ 来い めいれい', nasai: 'nasai なさい', tara: 'tara if when', ba: 'ba if ければ すれば', 'to-cond': 'to if whenever', nara: 'nara if', tokoro: 'とこ tokoro about to just', 'ta-bakari': 'ばかり bakari just did', aida: '間 あいだ aida while during 間に', uchini: 'うちに uchini while before', tamama: 'まま mama still as it is', hajimeru: '始める 出す hajimeru dasu start begin', owaru: '終わる owaru finish', tsuzukeru: '続ける tsuzukeru keep continue', temo: 'temo even if でも', 'qword-temo': 'どうしても 何を いくら どんなに いつ 誰 no matter dou shitemo', nagara: 'nagara while', naide: 'naide without', zuni: 'zuni without せずに', 'te-reason': 'te because てよかった reason', tame: 'ために ための tame tameni for in order to', 'youni-so-that': 'ように youni so that ないように', 'noni-purpose': 'noni for purpose のに使う', nakanaka: 'nakanaka quite not easily', zutto: 'zutto always all along by far', kitto: 'kitto surely bet', zehi: '是非 zehi please love to', 'hodo-nai': 'ほど hodo not as', 'dochira-ga': 'どっち どちら dotchi dochira which compare', 'to-onaji': '同じ おなじ onaji same', 'no-youni': 'よう ような ように みたいな you like as', 'ga-suru': '気がする 匂いがする 音がする 味がする ga suru feel smell sound'};
// Grammar points in the order Jlab's beginner course TEACHES them (the card whose note explains the point, or the start of its block of cards; not the first card where it just shows up with "ignore this for now"). Worked out from the Anki deck in Jlab's card order (rechecked 14 Nov 2026). Any page not listed here shows under "Not in Jlab".
var JLAB = ('desu janai deshita janakatta wa mo u-verb ru-verb ga gairu yo na-adj ne suki-kirai i-adj i-adj-neg na-end i-adj-past na-adj-past i-adj-past-neg ' +
  'na-adj-neg zo u-verb-neg ru-verb-neg gaaru ru-verb-past u-verb-past tachi wo doushite nani ii kuru ni dare doko he kara made de de-means ' +
  'koko-soko-asoko kochira-sochira-achira soshite verb-noun zutto to-with to toka ya no-pos ga-no no-noun noha-noga particle-no no ndesu yone ' +
  'verb-past-neg adverb-ku-ni naru suru masu ka zenzen totemo demo ni-suru masenka ni-iku kana-wonder kore-sore-are kono-sono-ano mou itsumo tsumori ' +
  'tatsumori itsu dore ikura dou nanika hazu nanimo zenbu nandemo chotto konnani kute-de te-form te-and kara-because ta-koto dake node noni kedo ga-but ' +
  'shi tari noga-suki ka-embedded teiru teiru-state teiru-habit te-aru kke te-oku te-miru te-iku-kuru ichiban toki te-shimau potential koto-ga-dekiru ' +
  'to-cond nara aru-noun tara ba tewa-ikenai nakute-wa temo-ii sa-noun tai hoshii te-hoshii volitional te-kara mashou mashouka to-quote tte ageru kureru ' +
  'yaru morau te-kudasai naide-kudasai nasai imperative na-dont causative passive takusan kamoshirenai deshou darou shika bakari sugiru dono hodo-nai ' +
  'mada mada-teinai ato-de kitto you-da mitai sou-looks rashii hou-ga-ii yori kata yasui nikui zuni ta-bakari nagara tamama jouzu-heta tame zehi temo ' +
  'kurai kekkou amari ka-dou-ka kudasaru').split(' ');
// N5 points in the order they come up in Minna no Nihongo Books 1 and 2, one line per lesson, line 1 = lesson 1 (study list at the back of each book, small words searched in the text). An empty line is a lesson with no page on the site, it doesn't show. Any N5 page not listed here shows under "Not in Minna".
var MINNA = [
  'desu janai wa ka mo no-pos dare',
  'kore-sore-are kono-sono-ano no-noun nani',
  'koko-soko-asoko kochira-sochira-achira doko dochira ikura',
  'masu ni kara made to ne',
  'he kuru de-means to-with itsu yo nanimo',
  'wo de suru masenka mashou chotto soshite itsumo',
  'morau ageru mou mada',
  'i-adj ii na-adj i-adj-neg na-adj-neg amari totemo donna dou kekkou ga-but',
  'ga suki-kirai jouzu-heta kara-because doushite zenzen takusan adverb-ku-ni',
  'gaaru gairu ya',
  'ikutsu kurai dake',
  'deshita janakatta i-adj-past i-adj-past-neg na-adj-past yori ichiban',
  'hoshii tai ni-iku nanika goro',
  'te-form te-kudasai mashouka teiru',
  'temo-ii tewa-ikenai teiru-state',
  'te-and te-kara kute-de dore dono',
  'ru-verb-neg u-verb-neg naide-kudasai nakute-wa',
  'ru-verb u-verb koto-ga-dekiru mae-ni',
  'ru-verb-past u-verb-past ta-koto tari naru demo',
  'verb-past-neg kedo',
  'to-quote deshou demo-or',
  'verb-noun tachi',
  'toki',
  'kureru',
  '',  // 25
  'ndesu',  // 26
  'shika nandemo',  // 27
  'teiru-habit',  // 28
  '',  // 29
  '',  // 30
  'mada-teinai tsumori',  // 31
  'hou-ga-ii',  // 32
  'na-dont',  // 33
  'ato-de',  // 34
  'ka-or',  // 35
  '',  // 36
  '',  // 37
  'noha-noga noga-suki',  // 38
  'node',  // 39
  '',  // 40
  '',  // 41
  '',  // 42
  '',  // 43
  'sugiru ni-suru',  // 44
  '',  // 45
  '',  // 46
  '',  // 47
  '',  // 48
  'yone'  // 49
];

(function(){
  // index.html (made by build.py) has every page in one file, so links switch pages instead of loading files
  var BUNDLE = !!window.BUNDLE;
  var href = function(id){ return BUNDLE ? '#' + id : id + '.html'; };

  // light or dark look, remembered in this browser (dark if nothing saved)
  var THEME = 'wabisebi-theme';
  function getTheme(){ try { return localStorage.getItem(THEME) === 'light' ? 'light' : 'dark'; } catch (err) { return 'dark'; } }
  function setTheme(t){
    if (t === 'light') document.documentElement.setAttribute('data-theme', 'light');
    else document.documentElement.removeAttribute('data-theme');
    try { localStorage.setItem(THEME, t); } catch (err) {}
  }
  setTheme(getTheme());

  // every point, for the grid and the search; k is what the search matches (file name, pattern, description)
  var points = [];
  INDEX.forEach(function(g){
    g.pages = [].concat.apply([], g.cats.map(function(c){ return c.pages; }));
    g.cats.forEach(function(c){ c.pages.forEach(function(p){
      points.push({id: p[0], pat: p[1], d: p[2], level: g.level, cat: c.cat, k: (p[0] + ' ' + p[1] + ' ' + p[2] + ' ' + (ALSO[p[0]] || '')).toLowerCase()});
    }); });
  });
  var count = points.length;


  // the Grammar dropdown: the same page in three views
  var top = document.getElementById('top');
  top.innerHTML =
    '<a class="brand" href="' + href('start') + '"><span class="t">Wabisebi Japanese</span></a>' +
    '<button class="burger" type="button" aria-label="Menu" aria-expanded="false" aria-controls="menu"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>' +
    '<div class="menu" id="menu">' +
    '<a class="nav" href="' + href('jlpt') + '"><svg class="pad" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="4.5" width="14" height="16.5" rx="2"/><path d="M9 3h6v3H9z"/><path d="M8.5 13l2.5 2.5 4.5-5"/></svg> JLPT</a>' +
    // wide screens: "Vocabulary", "Kana", "Kanji" and "Tools" are dropdowns; phones keep their links in the ☰ menu
    // Grammar: one link, always opening the Grammar page sorted by JLPT level (the Jlab and Minna views are picked on the page)
    '<a class="nav" data-o="jlab" href="' + href('home') + '"><svg class="pad" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/></svg> Grammar</a>' +
    '<div class="kana-group"><button class="nav kana-btn" type="button" aria-expanded="false">語 Vocabulary <svg class="chev" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button>' +
      '<div class="kana-drop"><a class="nav" href="' + href('vocab-n5') + '">N5 Vocabulary List</a><a class="nav" href="' + href('vocab-n4') + '">N4 Vocabulary List</a></div></div>' +
    '<a class="nav m-only" href="' + href('vocab-n5') + '">語 N5 Vocabulary List</a>' +
    '<a class="nav m-only" href="' + href('vocab-n4') + '">語 N4 Vocabulary List</a>' +
    '<div class="kana-group"><button class="nav kana-btn" type="button" aria-expanded="false">あ Kana <svg class="chev" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button>' +
      '<div class="kana-drop">' +
      '<a class="nav" href="' + href('kana') + '">あ Hiragana</a>' +
      '<a class="nav" href="' + href('katakana') + '">ア Katakana</a>' +
      '</div></div>' +
    '<a class="nav m-only" href="' + href('kana') + '">あ Hiragana</a>' +
    '<a class="nav m-only" href="' + href('katakana') + '">ア Katakana</a>' +
    '<div class="kana-group"><button class="nav kana-btn" type="button" aria-expanded="false">字 Kanji <svg class="chev" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button>' +
      '<div class="kana-drop"><a class="nav" href="' + href('kanji-n5') + '">N5 Kanji</a><a class="nav" href="' + href('kanji-n4') + '">N4 Kanji</a></div></div>' +
    '<a class="nav m-only" href="' + href('kanji-n5') + '">字 N5 Kanji</a>' +
    '<a class="nav m-only" href="' + href('kanji-n4') + '">字 N4 Kanji</a>' +
    '<div class="kana-group"><button class="nav kana-btn" type="button" aria-expanded="false"><svg class="pad" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3a4 4 0 0 0-5.4 5l-5.6 5.6a1.8 1.8 0 0 0 2.5 2.5l5.6-5.6a4 4 0 0 0 5-5.4l-2.6 2.6-2.1-.4-.4-2.1z"/></svg> Tools <svg class="chev" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button>' +
      '<div class="kana-drop"><a class="nav" href="' + href('conjugator') + '">Verb Conjugator</a><a class="nav" href="' + href('kana-game') + '">Kana Game</a></div></div>' +
    '<a class="nav m-only" href="' + href('conjugator') + '"><svg class="pad" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3a4 4 0 0 0-5.4 5l-5.6 5.6a1.8 1.8 0 0 0 2.5 2.5l5.6-5.6a4 4 0 0 0 5-5.4l-2.6 2.6-2.1-.4-.4-2.1z"/></svg> Verb Conjugator</a>' +
    '<a class="nav m-only" href="' + href('kana-game') + '"><svg class="pad" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h10a5 5 0 0 1 4.9 4l1 5a2.6 2.6 0 0 1-4.4 2.3L16.4 16H7.6l-3.1 2.3A2.6 2.6 0 0 1 .1 16l1-5A5 5 0 0 1 7 7z"/><path d="M7.5 10v3M6 11.5h3"/><circle cx="15.5" cy="10.6" r=".6"/><circle cx="17.7" cy="12.6" r=".6"/></svg> Kana Game</a>' +
    '<a class="nav" href="' + href('resources') + '"><svg class="pad" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 6.5C10.5 5 8 4.5 3.5 4.5v14c4.5 0 7 .5 8.5 2 1.5-1.5 4-2 8.5-2v-14C16 4.5 13.5 5 12 6.5z"/><path d="M12 6.5v14"/></svg> Resources</a>' +
    '<a class="nav" href="' + href('support') + '"><svg class="pad" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg> Support</a>' +
    '<div class="find"><input id="find" type="search" placeholder="Search: は, topic, wa…" aria-label="Search grammar" autocomplete="off">' +
      '<ol class="results" id="results" hidden></ol></div>' +
    '</div>' +
    '<button class="theme" type="button"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"></svg></button>';

  // the switch shows what you'd go to: a sun in dark mode, a moon in light mode
  var themeBtn = top.querySelector('.theme');
  var SUN = '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>';
  var MOON = '<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/>';
  function showTheme(){
    var light = getTheme() === 'light';
    themeBtn.querySelector('svg').innerHTML = light ? MOON : SUN;
    themeBtn.setAttribute('aria-label', light ? 'Switch to dark' : 'Switch to light');
    themeBtn.title = themeBtn.getAttribute('aria-label');
  }
  themeBtn.addEventListener('click', function(){ setTheme(getTheme() === 'light' ? 'dark' : 'light'); showTheme(); });
  showTheme();

  // phones: the links and search fold into a menu behind the ☰ button
  var burger = top.querySelector('.burger');
  function setMenu(open){
    top.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Menu');
    burger.querySelector('path').setAttribute('d', open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16');
  }
  burger.addEventListener('click', function(){ setMenu(!top.classList.contains('open')); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') setMenu(false); });
  document.addEventListener('click', function(e){ if (!top.contains(e.target)) setMenu(false); });
  // picking a link or a search result closes it (in index.html these only change the #page, so nothing reloads)
  top.querySelector('.menu').addEventListener('click', function(e){ if (e.target.closest('a')) setMenu(false); });
  window.addEventListener('hashchange', function(){ setMenu(false); });

  // the Grammar and Kana dropdowns (wide screens): click or hover opens one, a click elsewhere or Esc closes it
  top.querySelectorAll('.kana-group').forEach(function(group){
    var btn = group.querySelector('.kana-btn');
    function setOpen(open){ group.classList.toggle('open', open); btn.setAttribute('aria-expanded', String(open)); }
    btn.addEventListener('click', function(){ setOpen(!group.classList.contains('open')); });
    group.addEventListener('click', function(e){ if (e.target.closest('a')) setOpen(false); });
    // hovering one closes a dropdown left open by a click, so two never show at once
    group.addEventListener('mouseenter', function(){
      top.querySelectorAll('.kana-group.open').forEach(function(other){
        if (other !== group) { other.classList.remove('open'); other.querySelector('.kana-btn').setAttribute('aria-expanded', 'false'); }
      });
    });
    document.addEventListener('click', function(e){ if (!group.contains(e.target)) setOpen(false); });
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape') setOpen(false); });
  });

  // the Grammar page: every point as a card, in one of three views (switch on the page and in the Grammar dropdown, remembered per browser):
  // by JLPT level (one box per level, categories inside, "On this page" list on the right), Jlab's order, or Minna no Nihongo's order.
  // Jlab and Minna mix levels, so every card keeps its own level pill and a line on top counts the levels in that order.
  // the "Next" pill on grammar pages follows the view picked on the Grammar page: level order, Jlab or Minna.
  // Points that order leaves out come after it, in level order, the same as "Not in Jlab" / "Not in Minna" on the grid. The last point gets no Next pill, the first no Previous pill (that one sits under "All grammar").
  function setNext(){
    var o = getOrder(), ids = points.map(function(p){ return p.id; });
    var first = o === 'jlab' ? JLAB : o === 'minna' ? MINNA.join(' ').split(' ').filter(Boolean) : [];
    first = first.filter(function(id){ return ids.indexOf(id) > -1; });
    var list = first.concat(ids.filter(function(id){ return first.indexOf(id) < 0; }));
    var name = {level: 'level', jlab: 'Jlab', minna: 'Minna'}[o];
    list.forEach(function(id, i){
      var page = document.getElementById(id);
      if (!page) return;
      [['.next', list[i + 1], 'Next'], ['.prev', list[i - 1], 'Previous']].forEach(function(x){
        var a = page.querySelector(x[0]), p = points.find(function(q){ return q.id === x[1]; });
        if (!a) return;
        a.hidden = !p;
        if (!p) return;
        a.href = href(p.id);
        a.title = x[2] + ' in ' + name + ' order: ' + p.pat + ' (' + p.d + ')';
      });
    });
  }
  var ORDER = 'wabisebi-order';
  var VIEWS = {level: 'Sorted by JLPT level, then by topic.', jlab: 'In the order each point first comes up in the Jlab Anki deck.', minna: 'In the order of Minna no Nihongo, Books 1 and 2.'};
  var getOrder = function(){ try { var o = localStorage.getItem(ORDER); return VIEWS[o] ? o : 'jlab'; } catch (err) { return 'jlab'; } };
  var grids = [].slice.call(document.querySelectorAll('.grid'));
  grids.forEach(function(grid){
    var catId = function(g, i){ return 'g-' + g.level.toLowerCase() + '-' + i; };
    var lvId = function(g){ return 'g-' + g.level.toLowerCase(); };
    var any = points.map(function(p){ return [p.id, p.pat, p.d, p.level]; });
    var cards = function(pages, numbered){ return pages.map(function(p, n){
      return '<li><a class="gcard" href="' + href(p[0]) + '" data-k="' + (p[0] + ' ' + p[1] + ' ' + p[2] + ' ' + (ALSO[p[0]] || '')).toLowerCase() + '">' + (numbered ? '<span class="n">' + (n + numbered) + '</span>' : '') +
        '<span class="p">' + p[1] + '</span><span class="d">' + p[2] + '</span><span class="lv ' + p[3].toLowerCase() + '">' + p[3] + '</span></a></li>';
    }).join(''); };
    var section = function(cls, title, html, id){ return '<section class="cat ' + cls + '"' + (id ? ' id="' + id + '"' : '') + '><h3 class="label">' + title + '</h3><ol class="cards">' + html + '</ol></section>'; };
    var pagesOf = function(ids){ return ids.map(function(id){ return any.find(function(p){ return p[0] === id; }); }).filter(Boolean); };
    // the levels in an order, with a count each: "N5 104 · N4 5"
    var levels = function(pages, link){
      return '<p class="glevels"><span class="label">Levels</span>' + INDEX.map(function(g){
        var n = pages.filter(function(p){ return p[3] === g.level; }).length;
        return n ? '<span class="gl"><span class="lv ' + g.level.toLowerCase() + '">' + g.level + '</span> ' + n + '</span>' : '';
      }).join('') + (link || '') + '</p>';
    };
    var box = function(cls, title, pages, body, link){
      return '<details class="level ' + cls + '" open><summary><span class="t">' + title + '</span><span class="label">' + pages.length + ' grammar points</span></summary>' + levels(pages, link) + body + '</details>';
    };
    // by level
    var byLevel = INDEX.map(function(g){
      return '<details class="level bylevel" id="' + lvId(g) + '" open><summary><span class="t">' + g.level + '</span><span class="label">' + g.pages.length + (g.pages.length === 1 ? ' grammar point' : ' grammar points') + '</span></summary>' +
        g.cats.map(function(c, i){ return c.pages.length ? section('', c.cat, cards(c.pages.map(function(p){ return [p[0], p[1], p[2], g.level]; })), catId(g, i)) : ''; }).join('') + '</details>';
    }).join('');
    // Jlab: one list, then what it leaves out
    var notIn = function(ids, title){ var rest = any.filter(function(p){ return ids.indexOf(p[0]) < 0; }); return rest.length ? section('', title, cards(rest)) : ''; };
    var jl = pagesOf(JLAB);
    var jlab = box('ordered jlab', 'Jlab Anki Deck', jl, section('', 'Jlab\'s beginner course', cards(jl, 1)) + notIn(JLAB, 'Not in Jlab'),
      '<a class="glink" href="https://ankiweb.net/shared/info/911122782" target="_blank" rel="noopener">Get the deck on AnkiWeb ↗</a>');
    // Minna: one section per lesson, the numbers run on across lessons
    var mnIds = MINNA.join(' ').split(' ').filter(Boolean), num = 1;
    var minna = box('ordered minna', 'Minna no Nihongo', pagesOf(mnIds), MINNA.map(function(line, i){
      var pages = pagesOf(line.split(' '));
      if (!pages.length) return '';
      var html = section('', 'Book ' + (i < 25 ? 1 : 2) + ' · Lesson ' + (i + 1), cards(pages, num));
      num += pages.length;
      return html;
    }).join('') + notIn(mnIds, 'Not in Minna'));
    grid.innerHTML = '<div class="order seg" role="group" aria-label="Card order"><span class="label">View</span><button type="button" data-o="level">By JLPT level</button><button type="button" data-o="jlab">Jlab Anki Deck</button><button type="button" data-o="minna">Minna No Nihongo</button></div>' +
      '<div class="rcol">' + byLevel + jlab + minna + '<p class="empty gnone" hidden>No match.</p></div>';
    grid.querySelectorAll('.order button').forEach(function(b){ b.addEventListener('click', function(){ setOrder(b.getAttribute('data-o')); }); });
  });
  var setOrder = function(o){
    if (!VIEWS[o]) o = 'jlab';
    try { localStorage.setItem(ORDER, o); } catch (err) {}
    grids.forEach(function(grid){
      grid.setAttribute('data-order', o);
      grid.parentNode.setAttribute('data-order', o);   // the "No official list" box above the grid only shows in the level view
      grid.querySelectorAll('.order button').forEach(function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-o') === o ? 'true' : 'false'); });
      var sub = grid.parentNode.querySelector('.gsub'); if (sub) sub.textContent = VIEWS[o];
    });
    setNext();
  };
  setOrder(getOrder());
  // the Grammar dropdown links pick the view before the page opens
  document.addEventListener('click', function(e){ var a = e.target.closest('a[data-o]'); if (a) setOrder(a.getAttribute('data-o')); }, true);
  // the grid page on screen (index.html holds them all, the others are hidden)
  var openGrid = function(){ return grids.find(function(g){ return !g.closest('[hidden]'); }); };
  var filterGrid = function(q, grid){
    if (!grid) return false;
    var any = false;
    grid.querySelectorAll('.gcard').forEach(function(a){
      var m = !q || a.getAttribute('data-k').indexOf(q) > -1;
      a.parentNode.hidden = !m; if (m) any = true;
    });
    grid.querySelectorAll('.cat').forEach(function(c){
      c.hidden = !c.querySelector('li:not([hidden])');
    });
    grid.querySelectorAll('.level').forEach(function(l){
      l.hidden = !l.querySelector('li:not([hidden])');
      if (q) l.open = true;
    });
    grid.querySelector('.gnone').hidden = any || !!q;
    return any;
  };

  // search: on a grid page it filters the cards (and drops down the list when only other levels match), on other pages it drops down a list of matches
  var find = document.getElementById('find'), results = document.getElementById('results');
  find.addEventListener('input', function(){
    var q = find.value.trim().toLowerCase();
    var grid = openGrid();
    if (!q) { filterGrid('', grid); results.hidden = true; return; }
    if (filterGrid(q, grid)) { results.hidden = true; return; }
    var m = points.filter(function(p){ return p.k.indexOf(q) > -1; });
    results.innerHTML = m.length ? m.map(function(p){
      return '<li><a href="' + href(p.id) + '"><span>' + p.pat + '</span>' + (p.d ? '<span class="d">' + p.d + '</span>' : '') + '</a></li>';
    }).join('') : '<li class="empty">No match.</li>';
    results.hidden = false;
  });
  find.addEventListener('keydown', function(e){
    if (e.key === 'Enter') { var a = results.hidden ? null : results.querySelector('a'); if (a) a.click(); }
    if (e.key === 'Escape') { find.value = ''; filterGrid('', openGrid()); results.hidden = true; }
  });
  document.addEventListener('click', function(e){
    if (!e.target.closest('.find')) results.hidden = true;
  });

  // footer: the grammar count only on grammar pages (and the grid), the stroke data credit on the kana and kanji charts, then the copyright line on every page
  var foot = document.getElementById('foot');
  function setFoot(id){
    if (!foot) return;
    if (grids.some(function(g){ return g.closest('[id]').id === id; }) || points.some(function(p){ return p.id === id; })) foot.textContent = 'Updated ' + UPDATED + ' · ' + count + ' grammar points';
    else if (id === 'kanji-n5' || id === 'kanji-n4' || id === 'kanji-path' || id === 'kana' || id === 'katakana') foot.innerHTML = '<a class="credit" href="https://kanjivg.tagaini.net" target="_blank" rel="noopener">Stroke data: KanjiVG, CC BY-SA 3.0</a>';
    else foot.textContent = '';
    foot.insertAdjacentHTML('beforeend', '<span class="copy">© ' + new Date().getFullYear() + ' Wabisebi. All rights reserved.</span>');
  }
  if (!BUNDLE) { var own = document.querySelector('main > [id]'); setFoot(own && own.id); }

  // the short description under each page's pattern and the category in its label come from INDEX, so they always match the grid
  points.forEach(function(p){
    var page = document.getElementById(p.id), sub = page && page.querySelector('.sub'), label = page && page.querySelector('.head .label');
    if (sub) sub.textContent = p.d;
    if (label) label.textContent = p.level + ' Grammar · ' + p.cat;
    // a button back to the grid: left of the card and following the page down on wide screens, just above the card on narrow ones (inside the article, so index.html shows it with the page)
    if (page && !page.querySelector('.back')) { page.classList.add('has-back'); page.insertAdjacentHTML('afterbegin', '<a class="back" href="' + href('home') + '"><span class="tri" aria-hidden="true"></span>All grammar</a>'); }
    // and one to the next point on the right, in the order of the view picked on the Grammar page (filled by setNext)
    if (page && !page.querySelector('.next')) page.querySelector('.back').insertAdjacentHTML('afterend', '<a class="next" hidden><span class="t">Next grammar</span><span class="tri" aria-hidden="true"></span></a>');
    // and one to the previous point, just under "All grammar" (same order)
    if (page && !page.querySelector('.prev')) page.querySelector('.back').insertAdjacentHTML('afterend', '<a class="prev" hidden><span class="tri" aria-hidden="true"></span><span class="t">Previous grammar</span></a>');
  });
  setNext();

  // inside the Claude panel media/ can't load: swap the broken image for a short hint
  if (location.protocol === 'data:') {
    document.querySelectorAll('.mine img, .lead img').forEach(function(img){
      var p = document.createElement('p');
      p.className = 'src';
      p.textContent = 'Image and audio show when you open index.html in Safari or Chrome.';
      img.replaceWith(p);
    });
  }

  // one shared player for every play button: a player per button (600 in index.html) made iPhones slow and laggy.
  // A clip only loads when its button is touched, and starting one stops the other.
  var player = new Audio(), playBtn = null;
  player.preload = 'none';
  function cue(b){
    var src = b.getAttribute('data-src');
    if (player.dataset.src !== src) { player.dataset.src = src; player.src = src; }
  }
  player.addEventListener('play', function(){ if (playBtn) playBtn.classList.add('on'); });
  player.addEventListener('pause', function(){ if (playBtn) playBtn.classList.remove('on'); });
  // start loading as the finger lands, so the clip is (nearly) ready by the time the tap ends
  document.addEventListener('pointerdown', function(e){
    var b = e.target.closest('.play');
    if (b && player.paused) cue(b);
  });
  document.addEventListener('click', function(e){
    var b = e.target.closest('.play');
    if (!b) return;
    if (b === playBtn && !player.paused) { player.pause(); return; }
    if (playBtn) playBtn.classList.remove('on');
    player.pause(); cue(b); playBtn = b;
    try { player.currentTime = 0; } catch (err) {}
    var p = player.play();
    if (p && p.catch) p.catch(function(){ b.classList.remove('on'); });
  });


  // stroke order (hiragana chart): KanjiVG strokes are drawn one by one over the same strokes shown faintly
  function showStrokes(strokeBox, ch){
    var chars = ch.split(''), n = 0, ghost = '', live = '', grid = '', i, j, d;
    for (i = 0; i < chars.length; i++) {
      d = (typeof STROKES !== 'undefined' && STROKES[chars[i]]) || [];
      // practice-sheet square behind each character: a frame plus a dashed cross through the middle
      grid += '<g transform="translate(' + i * 109 + ' 0)"><rect x="0" y="0" width="109" height="109"/><path class="mid" d="M54.5 0V109M0 54.5H109"/></g>';
      ghost += '<g transform="translate(' + i * 109 + ' 0)">'; live += '<g transform="translate(' + i * 109 + ' 0)">';
      for (j = 0; j < d.length; j++, n++) {
        ghost += '<path d="' + d[j] + '"/>';
        live += '<path d="' + d[j] + '" pathLength="1" style="animation-delay:' + (n * .9) + 's"/>';
      }
      ghost += '</g>'; live += '</g>';
    }
    strokeBox.querySelector('.sv').innerHTML = n
      ? '<svg viewBox="-1 -1 ' + (chars.length * 109 + 2) + ' 111" role="img" aria-label="Stroke order of ' + ch + '"><g class="pgrid">' + grid + '</g><g class="ghost">' + ghost + '</g><g class="live">' + live + '</g></svg>'
      : '<div class="plain">' + ch + '</div>';
    strokeBox.querySelector('.note').textContent = n ? n + (n === 1 ? ' stroke' : ' strokes') : 'Stroke order coming soon';
    strokeBox.querySelector('.replay').style.visibility = n ? 'visible' : 'hidden';
    strokeBox.dataset.ch = ch;
  }
  document.querySelectorAll('.stroke-panel').forEach(function(strokeBox){
    strokeBox.innerHTML = '<div class="sv"></div><div class="side"><span class="note"></span><button class="replay" type="button">Replay</button></div>'; // the credit sits in the footer, under the grid
    strokeBox.querySelector('.replay').addEventListener('click', function(){ showStrokes(strokeBox, strokeBox.dataset.ch); });
    showStrokes(strokeBox, strokeBox.dataset.first);
    // kanji chart: the tiles carry their readings, shown under the animation
    var first = [].find.call(strokeBox.closest('.kana-board').querySelectorAll('.kana[data-on]'), function(b){ return b.querySelector('.k').textContent === strokeBox.dataset.first; });
    if (first) {
      strokeBox.classList.add('has-yomi');
      strokeBox.insertAdjacentHTML('beforeend', '<dl class="yomi"><dt>On\'yomi</dt><dd class="on"></dd><dt>Kun\'yomi</dt><dd class="kun"></dd><dt>Examples</dt><dd class="words"></dd></dl>');
      showYomi(strokeBox, first);
    }
    // on phones the panel is a bottom sheet (kana and kanji charts): a tile opens it, × or Esc closes it.
    // At the top of the page it played out of sight once you scrolled down to a tile.
    var board = strokeBox.closest('.kana-board');
    strokeBox.insertAdjacentHTML('afterbegin', '<button class="sheet-close" type="button" aria-label="Close">×</button>');
    strokeBox.querySelector('.sheet-close').addEventListener('click', function(){ board.classList.remove('sheet-open'); });
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape') board.classList.remove('sheet-open'); });
  });
  // kanji chart: the on/kun explainer starts folded on phones
  if (window.matchMedia('(max-width:720px)').matches) document.querySelectorAll('details.onkun').forEach(function(d){ d.removeAttribute('open'); });
  // common readings first, the rare ones smaller and faded after them; example words with the kanji and its sound marked
  function showYomi(strokeBox, b){
    function list(common, rare){
      var c = common === '-' ? '' : common.split('・').join('、');
      var r = rare ? rare.split('・').join('、') : '';
      return (c || (r ? '' : '–')) + (r ? '<span class="rare">' + (c ? '、' : '') + r + '</span>' : '');
    }
    var ch = b.querySelector('.k').textContent;
    strokeBox.querySelector('.yomi .on').innerHTML = list(b.dataset.on, b.dataset.onRare);
    strokeBox.querySelector('.yomi .kun').innerHTML = list(b.dataset.kun, b.dataset.kunRare);
    strokeBox.querySelector('.yomi .words').innerHTML = b.dataset.words.split('、').map(function(x){
      var p = x.split(':');
      return '<span class="w"><span class="wj">' + p[0].split(ch).join('<mark>' + ch + '</mark>') + '</span><span class="wr">' + p[1].replace('[', '<mark>').replace(']', '</mark>') + '</span><span class="we">' + p[2] + '</span></span>';
    }).join('');
  }

  // kana charts: the tile you tap turns gold and its stroke order plays (the sounds were removed on 24 Oct 2026)
  var kanaOn = null;
  document.querySelectorAll('.kana:not(.gap)').forEach(function(b){
    b.addEventListener('click', function(){
      if (kanaOn) kanaOn.classList.remove('on');
      kanaOn = b; b.classList.add('on');
      var sp = b.closest('.kana-board').querySelector('.stroke-panel');
      if (sp) { showStrokes(sp, b.querySelector('.k').textContent); b.closest('.kana-board').classList.add('sheet-open'); }
      if (sp && b.dataset.on) showYomi(sp, b);
    });
  });
  // Kanji Path (test, 13 Nov 2026; calmer version the same day, Seb found the first one overwhelming):
  // one kanji per screen (strokes, equation, story), the rest behind "More"; a short intro screen before each step.
  // Data sits in the page (script.kp-data); the full list hides in "All kanji".
  document.querySelectorAll('.kp').forEach(function(sec){
    var data = JSON.parse(sec.querySelector('.kp-data').textContent), K = data.kanji;
    var stage = sec.querySelector('.kp-stage'), map = sec.querySelector('.kp-map'), all = sec.querySelector('.kp-all');
    var idx = {}; K.forEach(function(x, i){ idx[x.k] = i; });
    var FIT = {yes: ['Same sound', 'yes'], close: ['Close sound', 'close'], no: ['Sound drifted', 'no'], none: ['Meaning only', 'none']};
    // slides: welcome, then per step an intro screen followed by its kanji
    var slides = [{w: 1}], at = {};
    data.steps.forEach(function(st, si){
      slides.push({st: si});
      K.forEach(function(x, i){ if (x.s === si + 1) { at[x.k] = slides.length; slides.push({k: i}); } });
    });
    var cur = 0;
    function esc(s){ return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
    // "All kanji": tiles by step, step 3 grouped by sound family
    var html = '';
    data.steps.forEach(function(st, si){
      html += '<h3>' + (si + 1) + ' · ' + st.t + '</h3><div class="kp-tiles">';
      var lastFam = null;
      K.forEach(function(x, i){
        if (x.s !== si + 1) return;
        if (x.fam && x.fam !== lastFam) {
          var fr = K.filter(function(y){ return y.snd && y.snd.p === x.fam; })[0].snd.pr;   // the family's sound, as its members give it
          html += '<div class="kp-fam"><b>' + x.fam + '</b> family · ' + fr + '</div>';
          lastFam = x.fam;
        }
        html += '<button class="kp-tile" type="button" data-k="' + x.k + '"><span class="k">' + x.k + '</span><span class="r">' + x.m + '</span></button>';
      });
      html += '</div>';
    });
    map.innerHTML = html;
    function usedIn(ch){ return K.filter(function(y){ return y.parts && y.parts.some(function(p){ return p[2] === ch; }); }); }
    function words(x){
      return x.w.split('、').map(function(s){
        var p = s.split(':');
        return '<span class="w"><span class="wj">' + p[0].split(x.k).join('<mark>' + x.k + '</mark>') + '</span><span class="wr">' + p[1].replace('[', '<mark>').replace(']', '</mark>') + '</span><span class="we">' + esc(p[2]) + '</span></span>';
      }).join('');
    }
    function chip(p){
      var link = p[2] && p[2] in idx;
      return '<' + (link ? 'button type="button" data-k="' + p[2] + '"' : 'span') + ' class="kp-part' + (link ? ' link' : '') + '"><span class="k">' + p[0] + '</span><span class="r">' + esc(p[1]) + '</span></' + (link ? 'button' : 'span') + '>';
    }
    function nav(){
      return '<div class="kp-nav"><button type="button" class="kp-prev"' + (cur ? '' : ' disabled') + '>◀ Previous</button><button type="button" class="kp-next"' + (cur < slides.length - 1 ? '' : ' disabled') + '>Next ▶</button></div>';
    }
    function show(n, scroll){
      cur = n; var sl = slides[n], h;
      try { localStorage.setItem('wabisebi-kpath', n); } catch (e) {}
      if (sl.k == null) {
        // intro screen: the welcome, or one step's title and one-line description
        var st = sl.w ? null : data.steps[sl.st];
        h = '<div class="kp-intro">' + (st ? '<div class="kp-n">Step ' + (sl.st + 1) + ' of ' + data.steps.length + '</div><h2>' + st.t + '</h2><p>' + st.d + '</p>'
          : '<h2>Learn kanji from their parts</h2><p>' + data.welcome + '</p>') + '</div>' + nav();
        stage.innerHTML = h;
      } else {
        var x = K[sl.k];
        h = '<div class="kp-top"><span>Step ' + x.s + ' · ' + data.steps[x.s - 1].t + '</span><span>' + (sl.k + 1) + ' of ' + K.length + '</span></div>' +
          '<div class="kp-stroke"><div class="sv"></div><div class="side"><span class="note"></span><button class="replay" type="button">Replay</button></div></div>' +
          '<div class="kp-m">' + x.m + '</div>';
        if (x.parts) h += '<div class="kp-eq">' + x.parts.map(chip).join('<span class="op">+</span>') + '<span class="op">=</span><span class="kp-part res"><span class="k">' + x.k + '</span><span class="r">' + x.m + '</span></span></div>';
        h += '<p class="kp-story">' + x.story + '</p>';
        // the rest, folded
        var more = '';
        if (x.squeeze) more += '<p class="kp-small">' + x.squeeze + '</p>';
        more += '<h3>Sound</h3>';
        if (x.snd && x.snd.fit === 'none') more += '<div class="kp-snd"><span class="kp-fit none">' + FIT.none[0] + '</span></div>';
        else if (x.snd) more += '<div class="kp-snd"><span class="kp-sp">' + x.snd.p + '<small>' + x.snd.pr + '</small></span><span class="op">→</span><span class="kp-sp me">' + x.k + '<small>' + x.snd.r + '</small></span><span class="kp-fit ' + FIT[x.snd.fit][1] + '">' + FIT[x.snd.fit][0] + '</span></div>';
        if (x.snd && x.snd.note) more += '<p class="kp-small">' + x.snd.note + '</p>';
        else if (!x.snd) more += '<p class="kp-small">' + (x.kind === 'pic' ? 'A picture has no sound hint.' : 'No sound part here.') + ' Learn the readings through the words.</p>';
        more += '<dl class="kp-yomi"><dt>On</dt><dd class="on">' + x.on + '</dd><dt>Kun</dt><dd>' + x.kun + '</dd></dl>';
        more += '<h3>Words</h3><div class="words">' + words(x) + '</div>';
        var later = usedIn(x.k);
        if (later.length) more += '<h3>Shows up in</h3><div class="kp-later">' + later.map(function(y){
          var t = y.snd && y.snd.p === x.k ? '<span class="kp-fit ' + FIT[y.snd.fit][1] + '">' + FIT[y.snd.fit][0] + '</span>' : '';
          return '<button type="button" class="kp-part link" data-k="' + y.k + '"><span class="k">' + y.k + '</span><span class="r">' + y.m + '</span>' + t + '</button>';
        }).join('') + '</div>';
        h += '<details class="kp-more"><summary>More: sound, words</summary>' + more + '</details>' + nav();
        stage.innerHTML = h;
        var sb = stage.querySelector('.kp-stroke');
        showStrokes(sb, x.k);
        sb.querySelector('.replay').addEventListener('click', function(){ showStrokes(sb, x.k); });
      }
      map.querySelectorAll('.kp-tile').forEach(function(t){ t.classList.toggle('on', sl.k != null && t.dataset.k === K[sl.k].k); });
      if (scroll && stage.getBoundingClientRect().top < 0) stage.scrollIntoView({block: 'start'});
    }
    function go(ch){ show(at[ch], true); }
    stage.addEventListener('click', function(e){
      var b = e.target.closest('button'); if (!b) return;
      if (b.dataset.k && b.dataset.k in at) go(b.dataset.k);
      else if (b.classList.contains('kp-prev') && cur > 0) show(cur - 1, true);
      else if (b.classList.contains('kp-next') && cur < slides.length - 1) show(cur + 1, true);
    });
    map.addEventListener('click', function(e){
      var t = e.target.closest('.kp-tile'); if (!t) return;
      all.open = false; go(t.dataset.k);
    });
    // arrow keys step through, only while this page is the one showing
    document.addEventListener('keydown', function(e){
      if (!sec.offsetParent || /INPUT|TEXTAREA/.test((e.target.tagName || ''))) return;
      if (e.key === 'ArrowRight' && cur < slides.length - 1) show(cur + 1, false);
      if (e.key === 'ArrowLeft' && cur > 0) show(cur - 1, false);
    });
    var saved = null; try { saved = +localStorage.getItem('wabisebi-kpath'); } catch (e) {}
    show(saved > 0 && saved < slides.length ? saved : 0, false);
  });

  // resources and the grammar grid: "On this page" list. Clicks scroll in place (index.html uses the #hash for pages), and the section in view is marked
  document.querySelectorAll('.toc').forEach(function(toc){
    var bar = document.querySelector('.top');
    function barHeight(){ if (bar) document.documentElement.style.setProperty('--topbar', bar.offsetHeight + 'px'); }   // the top bar wraps to different heights
    barHeight(); window.addEventListener('resize', barHeight);
    var links = [].slice.call(toc.querySelectorAll('a'));
    links.forEach(function(a){
      a.addEventListener('click', function(e){
        e.preventDefault(); e.stopPropagation();   // keep index.html's page router from treating it as a page link
        var sec = document.getElementById(a.getAttribute('href').slice(1));
        if (!sec) return;
        var box = sec.closest('details'); if (box) box.open = true;   // a category sits inside its level box
        sec.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion:reduce)').matches ? 'auto' : 'smooth', block: 'start'});
      });
    });
    if (!('IntersectionObserver' in window)) return;
    var seen = {};
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ seen[en.target.id] = en.isIntersecting; });
      var cur = links.find(function(a){ return seen[a.getAttribute('href').slice(1)]; });
      links.forEach(function(a){ a.classList.toggle('on', a === cur); });
    }, {rootMargin: '-' + (((bar && bar.offsetHeight) || 72) + 24) + 'px 0px -55% 0px'});   // +24: a section scrolled to sits 16px under the bar, so the one above it is out of the band
    links.forEach(function(a){ var sec = document.getElementById(a.getAttribute('href').slice(1)); if (sec) io.observe(sec); });
  });

  // the meaning toggle on the kanji chart (the kana charts always show romaji)
  document.querySelectorAll('.romaji-toggle').forEach(function(romaji){
    romaji.addEventListener('click', function(){
      var off = romaji.closest('.kana-board').classList.toggle('no-romaji');
      romaji.textContent = (romaji.dataset.label || 'Romaji') + ': ' + (off ? 'off' : 'on');
      romaji.setAttribute('aria-pressed', String(!off));
    });
  });

  // "What to add" tables: a Casual/Polite switch when the table has polite versions (data-p: the polite HTML of
  // that cell or rule line). A grey "nothing added" row turns normal in polite when its Add cell gets something.
  [].forEach.call(document.querySelectorAll('.narule'), function(nr){
    var cells = [].slice.call(nr.querySelectorAll('[data-p]'));
    if (!cells.length) return;
    cells.forEach(function(el){ el.setAttribute('data-c', el.innerHTML); });
    var grey = [].slice.call(nr.querySelectorAll('tr.none')).filter(function(tr){ return tr.querySelector('td.add[data-p]'); });
    var h = nr.querySelector('.nr-h'), top = document.createElement('div'), sw = document.createElement('div');
    top.className = 'nr-top'; sw.className = 'pswitch'; sw.setAttribute('role', 'group'); sw.setAttribute('aria-label', 'Politeness');
    // Polite first and on by default, so it matches the first lead card (always the polite one)
    sw.innerHTML = '<button type="button" class="polite">Polite</button><button type="button" class="casual">Casual</button>';
    h.parentNode.insertBefore(top, h); top.appendChild(h); top.appendChild(sw);
    var set = function(pol){
      [].forEach.call(sw.children, function(x){ x.setAttribute('aria-pressed', String(x.classList.contains('polite') === pol)); });
      cells.forEach(function(el){ el.innerHTML = el.getAttribute(pol ? 'data-p' : 'data-c'); });
      grey.forEach(function(tr){ tr.classList.toggle('none', !pol); });
    };
    set(true);
    sw.addEventListener('click', function(e){
      var b = e.target.closest('button'); if (b) set(b.classList.contains('polite'));
    });
  });

  // Verb Conjugator: the verbs (N5 + N4 lists, tagged by type) live as text in pages/conjugator.html
  (function(){
    var box = document.querySelector('.conj');
    if (!box) return;
    var input = box.querySelector('.conj-q'), out = box.querySelector('.conj-out');
    var furi = box.closest('section').querySelector('.conj-furi');
    function setFuri(off){
      box.classList.toggle('no-furi', off);
      furi.textContent = 'Furigana: ' + (off ? 'off' : 'on');
      furi.setAttribute('aria-pressed', String(!off));
    }
    try { setFuri(localStorage.getItem('wabisebi-furigana') === 'off'); } catch (e) {}
    furi.addEventListener('click', function(){
      var off = !box.classList.contains('no-furi');
      setFuri(off);
      try { localStorage.setItem('wabisebi-furigana', off ? 'off' : 'on'); } catch (e) {}
    });
    var TYPE = { r:'る-verb', u:'う-verb', s:'する-verb', k:'Irregular', a:'う-verb, with an odd negative', i:'う-verb, with an odd て-form', h:'う-verb, with an odd ます-form' };
    var ROW = { 'う':'わいおえ', 'く':'かきこけ', 'ぐ':'がぎごげ', 'す':'さしそせ', 'つ':'たちとて', 'ぬ':'なにのね', 'ぶ':'ばびぼべ', 'む':'まみもめ', 'る':'らりろれ' };
    var TE = { 'う':'って', 'つ':'って', 'る':'って', 'く':'いて', 'ぐ':'いで', 'す':'して', 'ぬ':'んで', 'ぶ':'んで', 'む':'んで' };
    var IE = 'いきしちにひみりぎじびぴえけせてねへめれげぜでべぺ';
    var esc = function(t){ return t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); };
    var VERBS = box.closest('section').querySelector('.conj-verbs').textContent.trim().split('\n').map(function(l){
      var p = l.trim().split('|');
      return { k:p[0], r:p[1], m:p[2], en:p[3], t:p[4], w:p[0] || p[1] };
    });
    // every form, by name; polite forms are built from the ます-stem (m) or from the casual form
    function forms(word, t){
      var last = word.slice(-1), base = word.slice(0, -1), a = ROW[last], x;
      if (t === 'r') x = { m:base, nai:base + 'ない', ta:base + 'た', te:base + 'て', vol:base + 'よう', caus:base + 'させる', pot:base + 'られる', pass:base + 'られる', ba:base + 'れば', imp:base + 'ろ', cp:base + 'させられる' };
      else if (t === 's') { base = word.slice(0, -2); x = { m:base + 'し', nai:base + 'しない', ta:base + 'した', te:base + 'して', vol:base + 'しよう', caus:base + 'させる', pot:base + 'できる', pass:base + 'される', ba:base + 'すれば', imp:base + 'しろ', cp:base + 'させられる' }; }
      else if (t === 'k') { var kj = word.slice(-2, -1) === '来', ki = kj ? '来' : 'き', ko = kj ? '来' : 'こ', ku = kj ? '来' : 'く'; base = word.slice(0, -2);
        x = { m:base + ki, nai:base + ko + 'ない', ta:base + ki + 'た', te:base + ki + 'て', vol:base + ko + 'よう', caus:base + ko + 'させる', pot:base + ko + 'られる', pass:base + ko + 'られる', ba:base + ku + 'れば', imp:base + ko + 'い', cp:base + ko + 'させられる' }; }
      else if (t === 'h') x = { m:base + 'い', nai:base + 'らない', ta:base + 'った', te:base + 'って', vol:base + 'ろう', caus:base + 'らせる', pot:base + 'れる', pass:base + 'られる', ba:base + 'れば', imp:base + 'い', cp:base + 'らされる' };
      else { var te = t === 'i' ? 'って' : TE[last];
        x = { m:base + a[1], nai:t === 'a' ? 'ない' : base + a[0] + 'ない', ta:base + te.slice(0, -1) + (te.slice(-1) === 'て' ? 'た' : 'だ'), te:base + te, vol:base + a[2] + 'う', caus:base + a[0] + 'せる',
          pot:base + a[3] + 'る', pass:base + a[0] + 'れる', ba:base + a[3] + 'ば', imp:base + a[3], cp:base + a[0] + (last === 'す' ? 'せられる' : 'される') }; }
      if (t === 'a') x.pot = x.pass = x.cp = '';
      var n = x.nai.slice(0, -1), pol = function(c){ return c ? c.slice(0, -1) + 'ます' : ''; };
      var out = { pres:[x.m + 'ます', word], neg:[x.m + 'ません', x.nai], past:[x.m + 'ました', x.ta], pneg:[x.m + 'ませんでした', n + 'かった'], te:x.te,
        teiru:[x.te + 'います', x.te + 'いる'], tai:[x.m + 'たいです', x.m + 'たい'], pot:[pol(x.pot), x.pot], tara:[x.m + 'ましたら', x.ta + 'ら'],
        vol:[x.m + 'ましょう', x.vol], nte:[n + 'いで', n + 'くて'], ba:x.ba, nba:n + 'ければ', pass:[pol(x.pass), x.pass], caus:[pol(x.caus), x.caus], cp:[pol(x.cp), x.cp], imp:x.imp };
      if (t === 'a') out.teiru = out.tai = out.caus = ['', ''];
      return out;
    }
    // the form written with kanji, furigana only over the kanji; 来 is the one kanji whose reading changes
    function written(v, form){
      if (!v.k) return esc(form);
      var segs = v.k.match(/[一-龯々]+|[^一-龯々]+/g), isK = function(x){ return /[一-龯々]/.test(x); };
      var m = v.r.match(new RegExp('^' + segs.map(function(x){ return isK(x) ? '(.+?)' : x; }).join('') + '$'));
      if (!m) return esc(form);
      var html = '', pos = 0, n = 0;
      segs.forEach(function(x, i){
        if (isK(x)) { var r = m[++n]; if (v.t === 'k') r = form.charAt(pos); html += '<ruby>' + x + '<rt>' + r + '</rt></ruby>'; pos += r.length; }
        else if (i < segs.length - 1) { html += x; pos += x.length; }
      });
      return html + form.slice(pos);
    }
    function guess(q){
      var last = q.slice(-1), prev = q.slice(-2, -1);
      if (/する$/.test(q)) return { w:q, t:'s', label:TYPE.s };
      if (!ROW[last] || q.length < 2) return null;
      if (/行く$/.test(q)) return { w:q, t:'i', label:'う-verb, with an odd て-form', sure:false };
      if (/(来|てく)る$/.test(q)) return { w:q, t:'k', label:'Irregular' };
      if (last === 'る' && IE.indexOf(prev) > -1) return { w:q, t:'r', label:'Probably a る-verb', sure:false };
      if (last === 'る' && /[一-龯々]/.test(prev)) return { w:q, t:'u', label:'Probably an う-verb', sure:false };
      return { w:q, t:'u', label:TYPE.u, sure:false };
    }
    function find(q){
      var low = q.toLowerCase().replace(/^to /, ''), word = new RegExp('(^|[^a-z])' + low.replace(/[^a-z ]/g, '') + '([^a-z]|$)');
      var exact = VERBS.filter(function(v){ return v.w === q || v.r === q || v.m === low; });
      var isEn = /^[a-z ]+$/.test(low);
      var start = VERBS.filter(function(v){ return v.k.indexOf(q) === 0 || v.r.indexOf(q) === 0 || v.m.indexOf(low) === 0; });
      var en = isEn && low.length > 1 ? VERBS.filter(function(v){ return word.test(v.en.toLowerCase()); }) : [];
      en.sort(function(x, y){ return x.en.toLowerCase().search(word) - y.en.toLowerCase().search(word); });
      var seen = [], all = exact.concat(start, en).filter(function(v){ if (seen.indexOf(v) > -1) return false; seen.push(v); return true; });
      return all;
    }
    function table(v, label, note){
      var f = forms(v.w === v.k ? v.r : v.w, v.t), w = function(x){ return v.en ? written(v, x) : esc(x); };
      if (!v.en) f = forms(v.w, v.t);
      var cell = function(x){ return x ? w(x) : '<span class="hint">none</span>'; };
      var row = function(name, p){ return '<tr><th>' + name + '</th><td>' + cell(p[0]) + '</td><td>' + cell(p[1]) + '</td></tr>'; };
      var wide = function(name, html){ return '<tr class="conj-te"><th>' + name + '</th><td colspan="2">' + html + '</td></tr>'; };
      var tbl = function(body){ return '<div class="forms twoforms"><table><thead><tr><th></th><th><span class="use polite">Polite</span></th><th><span class="use casual">Casual</span></th></tr></thead><tbody>' + body + '</tbody></table></div>'; };
      var one = function(body){ return '<div class="forms twoforms conj-one"><table><thead><tr><th></th><th colspan="2"><span class="use one">One form only</span></th></tr></thead><tbody>' + body + '</tbody></table></div>'; };
      var common = row('Present', f.pres) + row('Negative', f.neg) + row('Past', f.past) + row('Past negative', f.pneg) +
        row('～ている (doing)', f.teiru) + row('～たい (want to)', f.tai) + row('Potential (can)', f.pot) + row('～たら (if, when)', f.tara);
      var commonOne = wide('て-form', w(f.te));
      var more = row('Volitional (let\'s)', f.vol) + row('Passive', f.pass) + row('Causative (make, let)', f.caus) + row('Causative-passive (be made to)', f.cp);
      var moreOne = wide('～ないで (without, don\'t)', w(f.nte[0])) + wide('～なくて (not, so)', w(f.nte[1])) + wide('～ば (if)', w(f.ba)) + wide('～なければ (if not)', w(f.nba)) + wide('Imperative (command)', w(f.imp));
      return '<div class="conj-head"><span class="conj-w">' + (v.en ? written(v, v.r) : esc(v.w)) + '</span>' + (v.en ? '<span class="conj-en">' + esc(v.en) + '</span>' : '') + '<span class="conj-type">' + esc(label) + '</span></div>' +
        '<p class="conj-sec">Most common</p>' + tbl(common) + one(commonOne) +
        '<p class="conj-sec">Less common</p>' + tbl(more) + one(moreOne) + (note ? '<p class="m conj-note">' + note + '</p>' : '');
    }
    function labelOf(v){
      if (v.t === 'u' && v.r.slice(-1) === 'る' && IE.indexOf(v.r.slice(-2, -1)) > -1) return 'う-verb (looks like a る-verb)';
      return TYPE[v.t];
    }
    var menu = box.querySelector('.conj-menu'), shown = [], active = -1;
    function pick(v){ out.innerHTML = table(v, labelOf(v)); }
    function closeMenu(){ menu.hidden = true; active = -1; }
    function openMenu(hits, q){
      shown = hits.slice(0, 30);
      if (!shown.length || (hits.length === 1 && (hits[0].w === q || hits[0].r === q))) { closeMenu(); return; }
      active = -1;
      menu.innerHTML = shown.map(function(v, n){
        return '<button type="button" role="option" data-n="' + n + '"><span class="conj-mw">' + esc(v.w) + '</span>' + (v.k ? '<small>' + v.r + '</small>' : '') + '<span class="conj-me">' + esc(v.en) + '</span></button>';
      }).join('');
      menu.hidden = false;
      menu.scrollTop = 0;
    }
    function choose(v){ input.value = v.w; pick(v); flash(); closeMenu(); }
    function move(step){
      if (menu.hidden || !shown.length) return;
      active = (active + step + shown.length) % shown.length;
      [].forEach.call(menu.children, function(b, n){ b.classList.toggle('on', n === active); });
      menu.children[active].scrollIntoView({ block:'nearest' });
      pick(shown[active]);
    }
    // TRIG light on the oscilloscope case flashes on every keystroke or pick
    var trig = box.closest('section').querySelector('.led.trig'), trigT;
    function flash(){ if (!trig) return; trig.classList.add('hit'); clearTimeout(trigT); trigT = setTimeout(function(){ trig.classList.remove('hit'); }, 160); }
    function run(){
      flash();
      var q = input.value.trim();
      if (!q) { closeMenu(); pick(VERBS.filter(function(v){ return v.w === '歩く'; })[0]); return; }
      var hits = find(q);
      if (hits.length) { pick(hits[0]); openMenu(hits, q); return; }
      closeMenu();
      var g = guess(q);
      if (g) { out.innerHTML = table({ w:g.w, t:g.t, k:'', r:g.w, en:'' }, g.label, g.sure === false ? "This verb isn't on our N5 and N4 lists, so the type is a guess." : ''); return; }
      out.innerHTML = '<p class="conj-none">No verb found. Try the dictionary form, like 飲む.</p>';
    }
    input.addEventListener('input', run);
    input.addEventListener('focus', function(){ var q = input.value.trim(); if (q) openMenu(find(q), q); });
    input.addEventListener('keydown', function(e){
      if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
      else if (e.key === 'Escape') closeMenu();
      else if (e.key === 'Enter' && !menu.hidden && shown.length) { e.preventDefault(); choose(shown[active > -1 ? active : 0]); input.blur(); }
    });
    menu.addEventListener('click', function(e){
      var b = e.target.closest('button[data-n]');
      if (b) choose(shown[+b.getAttribute('data-n')]);
    });
    document.addEventListener('click', function(e){ if (!e.target.closest('.conj-field')) closeMenu(); });
    run();
  })();

  // Kana Game (back on 13 Nov 2026 as a retro console): type the romaji of the kana on the screen.
  // Kana data lives here (not read from the chart pages) so it works in index.html too.
  // Phone performance: the six fonts load only when the game is opened (kgOpen), and only the kana glyphs (Google Fonts text=), never at start.
  var kgOpen = function(){};
  var kg = document.querySelector('.kg');
  if (kg) (function(){
    function pairs(kana, rom){ return kana.split(' ').map(function(k, i){ return [k, rom.split(' ')[i]]; }); }
    var HB = pairs('あ い う え お か き く け こ さ し す せ そ た ち つ て と な に ぬ ね の は ひ ふ へ ほ ま み む め も や ゆ よ ら り る れ ろ わ を ん',
      'a i u e o ka ki ku ke ko sa shi su se so ta chi tsu te to na ni nu ne no ha hi fu he ho ma mi mu me mo ya yu yo ra ri ru re ro wa wo n');
    var HD = pairs('が ぎ ぐ げ ご ざ じ ず ぜ ぞ だ ぢ づ で ど ば び ぶ べ ぼ ぱ ぴ ぷ ぺ ぽ',
      'ga gi gu ge go za ji zu ze zo da ji zu de do ba bi bu be bo pa pi pu pe po');
    var HC = pairs('きゃ きゅ きょ しゃ しゅ しょ ちゃ ちゅ ちょ にゃ にゅ にょ ひゃ ひゅ ひょ みゃ みゅ みょ りゃ りゅ りょ ぎゃ ぎゅ ぎょ じゃ じゅ じょ びゃ びゅ びょ ぴゃ ぴゅ ぴょ',
      'kya kyu kyo sha shu sho cha chu cho nya nyu nyo hya hyu hyo mya myu myo rya ryu ryo gya gyu gyo ja ju jo bya byu byo pya pyu pyo');
    // other spellings that are fine too
    var ALT = {si:'shi', ti:'chi', tu:'tsu', hu:'fu', zi:'ji', nn:'n', sya:'sha', syu:'shu', syo:'sho', tya:'cha', tyu:'chu', tyo:'cho',
      jya:'ja', jyu:'ju', jyo:'jo', zya:'ja', zyu:'ju', zyo:'jo'};
    // ぢ and づ sound like じ and ず, but type as di and du on a Japanese keyboard
    var DU = {'ぢ': 'di', 'ヂ': 'di', 'づ': 'du', 'ヅ': 'du'};
    function answers(p){
      var a = [p[1]];
      Object.keys(ALT).forEach(function(k){ if (ALT[k] === p[1]) a.push(k); });
      if (DU[p[0]]) a.push(DU[p[0]]);
      return a;
    }
    function kata(s){ return s.replace(/[ぁ-ゖ]/g, function(c){ return String.fromCharCode(c.charCodeAt(0) + 0x60); }); }
    function toKata(list){ return list.map(function(p){ return [kata(p[0]), p[1]]; }); }

    // six fonts, each a different look: plain, textbook serif, pen, round, brush, pixel. System fonts as fallback offline
    var SANS = '"Hiragino Sans","Yu Gothic","Noto Sans CJK JP",sans-serif', SERIF = '"Hiragino Mincho ProN","Yu Mincho","Noto Serif CJK JP",serif';
    var FONTS = [
      {l: 'Plain', n: 'IBM Plex Sans JP', f: '"IBM Plex Sans JP",' + SANS, w: 500},
      {l: 'Serif', n: 'Noto Serif JP', f: '"Noto Serif JP",' + SERIF, w: 500, q: 'Noto+Serif+JP:wght@500'},
      {l: 'Pen', n: 'Klee One', f: '"Klee One",' + SANS, w: 600, q: 'Klee+One:wght@600'},
      {l: 'Round', n: 'Zen Maru Gothic', f: '"Zen Maru Gothic",' + SANS, w: 500, q: 'Zen+Maru+Gothic:wght@500'},
      {l: 'Brush', n: 'Yuji Syuku', f: '"Yuji Syuku",' + SERIF, w: 400, q: 'Yuji+Syuku'},
      {l: 'Pixel', n: 'DotGothic16', f: '"DotGothic16",' + SANS, w: 400, q: 'DotGothic16'}
    ];
    var loaded = false;
    function loadFonts(){
      if (loaded) return; loaded = true;
      var chars = {'あ': 1};
      HB.concat(HD, HC).forEach(function(p){ (p[0] + kata(p[0])).split('').forEach(function(c){ chars[c] = 1; }); });
      var text = Object.keys(chars).join('');
      for (var c = 32; c < 127; c++) text += String.fromCharCode(c);   // letters and digits for the pixel screen text
      var l = document.createElement('link');
      l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?' + FONTS.filter(function(f){ return f.q; }).map(function(f){ return 'family=' + f.q; }).join('&') + '&text=' + encodeURIComponent(text) + '&display=swap';
      document.head.appendChild(l);
    }

    // remembered per browser: modes, fonts, best streak (skipped quietly if storage is blocked)
    var SAVE = 'wabisebi-kana-console';
    var st = {on: {hira: true, kata: false, dakuten: false, combo: false}, fonts: [0, 1, 2, 3, 4, 5], best: 0};
    try {
      var sv = JSON.parse(localStorage.getItem(SAVE) || 'null');
      if (sv) {
        if (sv.on) Object.keys(st.on).forEach(function(k){ if (k in sv.on) st.on[k] = !!sv.on[k]; });
        if (sv.fonts) st.fonts = sv.fonts.filter(function(i){ return FONTS[i]; });
        if (typeof sv.best === 'number') st.best = sv.best;
      }
    } catch (err) {}
    if (!st.on.hira && !st.on.kata) st.on.hira = true;
    if (!st.fonts.length) st.fonts = [0];
    function save(){ try { localStorage.setItem(SAVE, JSON.stringify(st)); } catch (err) {} }

    var q = function(s){ return kg.querySelector(s); };
    var screen = q('.kg-screen'), kanaEl = q('.kg-kana'), input = q('.kg-input'), msg = q('.kg-msg');
    var scoreEl = q('.kg-score'), streakEl = q('.kg-streak'), bestEl = q('.kg-best');
    var cur = null, last = null, waiting = false, right = 0, total = 0, streak = 0, again = [], okT;

    // font cartridges: real toggles, at least one stays in
    var row = q('.kg-cart-row');
    FONTS.forEach(function(f, i){
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'kg-cart'; b.title = f.n;
      b.innerHTML = '<span class="k" lang="ja">あ</span><small>' + f.l + '</small>';
      b.querySelector('.k').style.fontFamily = f.f; b.querySelector('.k').style.fontWeight = f.w;
      b.addEventListener('click', function(){
        var at = st.fonts.indexOf(i);
        if (at >= 0) { if (st.fonts.length > 1) st.fonts.splice(at, 1); } else st.fonts.push(i);
        syncCarts(); save();
      });
      row.appendChild(b);
    });
    function syncCarts(){ [].forEach.call(row.children, function(b, i){ b.setAttribute('aria-pressed', String(st.fonts.indexOf(i) >= 0)); }); }
    function syncModes(){ kg.querySelectorAll('.kg-mode').forEach(function(b){ b.setAttribute('aria-pressed', String(st.on[b.dataset.set])); }); }

    function pool(){
      var out = [];
      'hira kata'.split(' ').forEach(function(s){
        if (!st.on[s]) return;
        var k = s === 'kata' ? toKata : function(x){ return x; };
        out = out.concat(k(HB));
        if (st.on.dakuten) out = out.concat(k(HD));
        if (st.on.combo) out = out.concat(k(HC));
      });
      return out;
    }
    function focus(){ if (window.matchMedia('(hover:hover)').matches) input.focus({preventScroll: true}); }
    function hud(){ scoreEl.textContent = right + '/' + total; streakEl.textContent = streak; bestEl.textContent = st.best; }
    function next(note){
      var p = pool(), pick;
      // a missed kana comes back after a few others
      if (again.length && Math.random() < 0.3) pick = again.shift();
      else do { pick = p[Math.floor(Math.random() * p.length)]; } while (p.length > 1 && last && pick[0] === last[0]);
      cur = last = pick; waiting = false;
      var f = FONTS[st.fonts[Math.floor(Math.random() * st.fonts.length)]];
      kanaEl.textContent = pick[0]; kanaEl.style.fontFamily = f.f; kanaEl.style.fontWeight = f.w;
      kanaEl.classList.remove('pop'); void kanaEl.offsetWidth; kanaEl.classList.add('pop');
      screen.classList.remove('bad');
      msg.classList.remove('blink');
      msg.textContent = note || 'Type the romaji';
      input.value = ''; focus();
    }
    function judge(ok){
      total++;
      if (ok) {
        right++; streak++;
        if (streak > st.best) { st.best = streak; save(); }
        next(streak % 10 === 0 ? 'COMBO x' + streak + '!' : '');
        screen.classList.add('ok'); clearTimeout(okT); okT = setTimeout(function(){ screen.classList.remove('ok'); }, 220);
      } else {
        streak = 0; waiting = true;
        screen.classList.remove('bad'); void screen.offsetWidth; screen.classList.add('bad');
        msg.innerHTML = 'It is <b>' + cur[1] + '</b>' + (DU[cur[0]] ? ' (or <b>' + DU[cur[0]] + '</b>)' : '') + ' · press A';
        msg.classList.add('blink');
        if (!again.some(function(x){ return x[0] === cur[0]; })) again.push(cur);
      }
      hud();
    }
    function enter(){
      if (waiting) { next(); return; }
      var v = input.value.trim().toLowerCase();
      if (v) judge(answers(cur).indexOf(v) >= 0);
    }
    input.addEventListener('input', function(){
      if (waiting) return;
      if (answers(cur).indexOf(input.value.trim().toLowerCase()) >= 0) judge(true);
    });
    input.addEventListener('keydown', function(e){ if (e.key === 'Enter') { e.preventDefault(); enter(); } });
    // A and B: keep the keyboard up on phones by not taking focus from the input
    kg.querySelectorAll('.kg-btn').forEach(function(b){ b.addEventListener('mousedown', function(e){ e.preventDefault(); }); });
    q('.kg-btn.a').addEventListener('click', enter);
    q('.kg-btn.b').addEventListener('click', function(){ if (waiting) next(); else judge(false); });
    kg.querySelectorAll('.kg-mode').forEach(function(b){
      b.addEventListener('click', function(){
        var s = b.dataset.set;
        st.on[s] = !st.on[s];
        if (!st.on.hira && !st.on.kata) st.on[s === 'hira' ? 'kata' : 'hira'] = true;   // keep at least one script on
        syncModes(); save(); again = []; next();
      });
    });
    syncModes(); syncCarts(); hud(); next();
    kgOpen = function(){ loadFonts(); focus(); };
    if (!BUNDLE) loadFonts();
  })();

  if (BUNDLE) {
    var pages = [].slice.call(document.querySelectorAll('[data-page]'));
    var show = function(id){
      if (!pages.some(function(p){ return p.id === id; })) id = pages[0].id;
      pages.forEach(function(p){
        p.hidden = p.id !== id;
        // build.py makes every image lazy so hidden pages don't download theirs; the page being opened gets all of its own right away
        if (!p.hidden) p.querySelectorAll('img[loading="lazy"]').forEach(function(img){ img.loading = 'eager'; });
      });
      setFoot(id);
      if (id === 'kana-game') kgOpen();
      find.value = ''; grids.forEach(function(g){ filterGrid('', g); }); results.hidden = true;
      window.scrollTo({top: 0});
    };
    // one listener for every in-page link, including the search results that get rebuilt on each keystroke
    document.addEventListener('click', function(e){
      var a = e.target.closest('a[href^="#"]');
      if (!a) return;
      e.preventDefault();
      var id = a.getAttribute('href').slice(1);
      show(id);
      try { history.replaceState(null, '', '#' + id); } catch (err) {}
    });
    window.addEventListener('hashchange', function(){ show(location.hash.slice(1)); });
    show(location.hash.slice(1));
  }
})();
