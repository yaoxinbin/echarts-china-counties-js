(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('林口县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"231025","properties":{"name":"林口县","cp":[130.284033,45.278046],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@A@AAA@@@@@A@A@@AA@@@A@A@@@@@@@@@@ABA@@@A@@A@@A@@@@@A@@@@AA@@@AA@@@@@@@@A@A@@BA@@@AB@@A@A@@@ABA@@@AA@@A@@@@A@@@@@AA@@AA@@@AAA@@A@@AA@@@AA@@A@A@@@A@A@ABA@A@A@A@A@@@A@@@AAA@A@A@ABA@A@@B@@@@AB@@@@@@A@A@@@A@AB@@A@@@@BA@@BA@@B@@@@@@AB@@@@@B@@@@@B@@A@@B@@A@@@@@@B@@A@@B@@@@@BA@@@A@@@@@@@A@@@A@A@@AA@A@AA@@@@@@@@A@@@@@@@@@A@@@@@@BA@@@@@AB@@@@@@A@@B@@@B@@A@@@@B@@@@@@@B@@@@@@AB@@@@@@A@@@@BA@@@AB@@@B@@@@@BA@@B@@A@@B@@@@AB@@A@@BA@AB@@@@A@@BA@AB@B@@@B@BAB@@@B@@@@AB@B@@@BAB@@@BA@@B@BA@@@@@A@A@A@@AA@@@A@@@AB@@AB@@@B@@@B@@@@@@A@@BA@A@@BA@@BA@CBA@CBA@A@A@@@C@A@@@A@A@@B@@@B@B@@@B@B@@@@@B@@AB@@AB@@@@@B@@A@@BA@@@A@A@A@@@A@@BA@A@@BA@AB@@@@@BA@@@AB@@AB@@ABAB@BABA@AB@@AB@@A@AB@@@@A@CBABA@A@AB@@A@@AA@@@@@@@@@@A@@@@@@@A@@@@A@AACAA@CA@@AA@@A@A@AAA@C@A@CAA@C@CAA@A@A@A@ABA@A@@@A@@@A@A@A@AAA@A@A@A@AAA@A@@A@@A@@@@B@@@@@@@BA@@@@BA@AB@@@@A@@B@@A@@@@@@BA@@@AB@@AB@@A@@BA@A@@BA@@@@@@@@@@B@@@@@@@B@B@@@BA@@BABA@@@A@@@A@AB@@A@ABA@CBA@ABABCB@@@@A@@@AB@@@BABCD@@ABA@@BA@AB@@A@A@A@@@ABA@A@A@@@A@@@@AA@@AA@@@AAA@@AA@@@A@AAA@@@@@AA@@A@@AA@AA@A@@@@@@A@@@B@@@@@@C@AB@@A@A@A@@@ABA@@BA@A@@@@@A@@@@@@A@@@AA@@@A@@@@@@@@AA@@@A@@BA@@@A@@AA@@AAAAA@AA@AAAAA@A@A@@@@BA@AB@@A@@AA@@AAA@@AA@BA@A@@@AA@@AAA@AA@@ABA@A@@BA@A@@BABA@A@@@@@@A@A@AB@@A@AB@@A@@@AAA@A@A@AA@@A@@AAAA@AA@@A@A@A@@@A@AAA@C@A@A@@@AAA@A@@@AAA@@AA@AAA@@A@@AB@@A@@B@@AB@@AB@@@B@@AB@@@B@@AB@@@@@B@@A@@BA@@@A@@BA@@@AB@@ABA@@BA@@@AB@@A@ABA@ABA@@BA@@B@@AB@B@@AB@@A@@B@@A@A@@BA@AB@@A@AB@@AB@@AB@@A@ABA@ABA@ABC@A@ABA@@@A@@@A@@@A@@@A@@@A@A@@AA@@@A@AA@@A@A@@@AA@@A@@@A@A@@@A@@@@BA@@B@@AB@@@BA@@BA@@BA@@BA@@@A@AB@@ABA@ABAB@@A@@@@BA@@BA@@DA@CBC@A@GBC@C@E@A@A@A@ABCBA@ABA@@BA@AB@@AB@@AB@BAB@BAB@BA@@BA@@BABABCDABA@@BA@CBCDCBA@ABABA@ABCBABA@CBABA@A@ABA@@BBB@@@B@D@D@BAB@@@@@@@B@B@@BD@D@BBB@BBD@BB@FD@BBBAB@BAB@@A@ABAB@BA@C@C@A@C@CAEAA@A@C@A@CBA@ABAB@@ABA@ABA@AACA@@CAA@@@A@@@A@@@@@@@@B@@@BAB@BA@@BA@ABA@CBABA@CBA@ABA@A@A@A@AAA@A@C@@@C@AACC@@@A@@A@@@@@@@@@A@@B@@ABADABADA@@@@B@B@B@BBBBD@BBB@B@@A@A@AAE@A@A@A@A@E@A@EACBC@C@CBABA@AB@@A@CBA@C@CBABAB@@CB@@@BA@@@@@AB@@CBA@ABCDCBAB@B@@A@@@@@@@@B@@@@@BAB@BCBCBC@@BA@@@A@@@@@A@@@AB@@@@@B@@A@@BADCD@BA@@@DB@@BB@@B@BBB@BB@@@@DBB@B@@@B@@@@B@@@@@B@B@B@@@@@BAB@@AB@B@@@@AB@B@@B@@B@B@@@B@@BB@B@@@B@@@BBB@B@@@@@B@@@@@@@@@B@@@@@@@@@B@@@@A@@@@@C@A@C@@BAB@@A@@@@@@BA@@B@B@@AB@@@B@@@@@BAB@B@BB@@B@@BBB@B@@@BB@@BB@@B@@BBBBB@@@@@BAB@B@B@@@B@@@@@B@@@@A@@B@@BD@@@BF@D@@@B@@@BA@@B@@@B@@@BBB@H@FDHBDB@@B@@@B@D@@@D@FBD@BBBB@BB@B@BBFDDBDDBBAB@@C@EBABCB@@ABABABAB@B@DAB@BABAB@@@B@@@@@BAF@B@BBDBBB@@B@@@B@BAB@@A@@B@@@@@B@B@BABBD@DBB@BDDBD@BBD@B@B@@BBB@D@DAD@FCB@DAB@DBB@BBDBBBDB@@DBB@@@B@F@H@D@D@D@B@B@HBJBD@D@DAB@HAB@B@BDDBBBDBDB@B@BADAB@BA@ABA@A@AB@@@BADADADADAF@DABA@@B@@BDFDDDDBFBDBDBD@B@DADBD@F@DBDB@@DABADAD@BAB@@@DABABADAB@DABC@@BA@ADA@ABAB@DBHDDBBB@B@B@@@B@@BD@DBDBFBBBBDBDD@B@B@@ABABABAB@@A@BB@@DBB@BBD@@@BAB@B@DCBAB@@@B@B@@@DBBBB@@@@@B@B@@@B@DAB@B@F@F@@@B@B@BAB@BAB@@@B@@@@@@@B@@@B@@B@B@BBBBD@B@D@@@@@B@B@@@@@B@@@@@@@B@@@@B@@@@@@@@@@@BA@@@@B@B@B@@@B@@@@@@@@@B@B@@BB@B@@@@@B@B@B@@@@@B@@@BB@@@@@@@@B@@@@@@@@AB@BB@@@@@@B@@@BBB@BBBBBBD@BB@@@@@@B@@B@@@BA@@B@B@@B@@@@@@@BB@@BBB@B@@@@@BB@@@@B@@AB@@@@@B@BA@@@@@@B@@@@@@@B@@@@@@@@B@@B@@BB@BBB@BBB@B@@@B@@B@@AB@@@@BB@BBB@BBB@@BB@BB@@BB@@BB@@@@@B@@@@@@@@@B@@@@B@@@@A@@BA@@B@@A@@B@@@B@B@@@B@@@@@BA@@@@B@BABADCD@@AB@@CBCBCBAB@@@@@DBBBB@BB@B@D@@BB@B@D@@@B@DBDBBBDBBBB@B@B@B@@@B@@B@@@@B@@@BB@@@@AB@@@B@@@B@@B@BBBB@@AB@BA@ABC@ABCB@@@BBBABA@ABCBAB@B@@BBDBDBDD@@BBB@@@B@B@BBB@B@DBBBDBBB@@D@B@@@BA@AB@BAD@@AB@BA@AB@DADAB@DAD@B@BAB@@AB@@ABBB@BDBDBBDBD@BBB@B@BBB@@B@BB@BB@@@B@B@BB@BBBB@@@B@@B@@@@@BA@@B@B@DA@AB@@@B@@@B@B@BAD@D@B@B@BA@ABA@@@AD@B@B@B@BA@@BA@@B@BAD@B@@A@@@A@C@AB@D@BAB@BA@ABA@@DAB@BBDBDB@B@D@BB@B@DBBBDBBBB@@@B@BABBB@B@DB@@BAD@B@B@BBFBBBB@BBD@B@B@B@@@BBF@DDD@DDDB@BB@B@B@BBBB@@DBB@B@@ABAB@FAB@BAB@BA@@@AHBDBD@BBB@B@@@@@B@@@DAB@@@BAB@@@DAB@B@B@DAB@@@@@B@B@@@@@@@@@@@B@@@@@B@B@B@@AD@@AB@@@@AB@@@B@B@@@B@B@@A@@B@@@@@@@@@@@@@@A@@B@@@@@@A@@@A@@@@@@@AB@@@@@@@B@@@@@@AB@@@@@BBBBB@BBBBB@B@BBB@B@B@@BB@@@@@@@B@@@@@@@@@@@@B@@@@@BB@@@@B@BB@@B@@B@@@B@@@@@@@@B@@BB@@@@@B@B@@BB@@@@@@@@@@@@@@@B@@@@@@AB@@@@@@AB@@@@B@@B@@@@@@@B@@@@@B@@@B@@@@AB@@@@@@@B@@@@A@@B@@@@@BA@@B@@AB@@AB@@@BA@@@@BA@@@@B@@@@B@@B@@@@AB@@@B@@@@@BA@@@@B@@@@@B@B@B@B@@@@AB@@@BA@@@@@@B@@@BB@@@DB@BBB@@BBBB@@B@@BB@@@B@@@@@B@B@@@B@@AB@@B@@@@@B@@B@@@@@B@@@@@@@@B@@AB@B@@@@@B@B@B@@@BAB@B@@AB@B@@@B@B@B@@@@AB@@@B@B@B@B@@@B@BAB@@@BA@A@@@ABA@A@AB@@@@@B@@@@@@@@@@@@@@AB@@@@@B@@@@@B@@@B@@@D@B@D@B@@@B@@A@@B@@@B@@B@BBB@@@@@B@@@@BB@@BB@@@BB@@B@B@@@BAB@@@B@@@@BB@BBB@BBB@BBB@@@@@@B@@@@@@@B@B@@@@AB@@@BBB@BB@@BB@DBB@@@B@@@B@B@@@B@@@B@@@B@B@@@B@B@@@B@BABAB@@@BA@@B@@@B@B@BAB@@@B@@@@@B@@@BBB@B@B@@BB@@B@@@@B@@@B@@@BA@@B@B@@BB@B@@@B@@@B@@BB@@@B@@@BB@@B@@@@@@@@@@@@@@A@@B@@@@@@@@A@@@A@@B@B@@A@@BA@A@@@@BA@@B@@A@@@@BA@@@@@@@A@@@@@@@@@A@@@A@@B@@A@@@@@@B@@@@@@@@@BA@@@@@A@A@@@@@@BA@A@@B@@@@@@@B@@@@@@@@AB@B@B@@@BA@@B@@@BAB@B@@@@@@A@@@@@@@A@@@@B@@@B@BA@@B@@A@@@@BA@@B@@@B@@@B@@@@AB@@@@@@A@@@ABA@@@A@@@@BA@@@AB@@@@@@@BA@@@@@@B@@@@@B@@@B@B@@@@@B@@@@@B@@A@@@@@@@A@@@@@AB@BAB@@A@@@A@@@A@@@A@@@@B@@A@@D@@@BA@@@@@@@@@A@@@@@A@@@@AA@@@@@AB@@A@@@@@A@@@@@@@A@@B@@@@@B@@@@@B@@@B@B@B@BAB@B@@@B@@@@@@@@A@@@@@A@@@@@@@A@@@@@@@@@@@A@@@AAA@@@@@@@@@A@@@@@@@@B@@@@@@A@@@@@@@AA@@A@@@A@@@@@@@A@@@@@@BAB@BA@@B@@@BA@@B@@AB@BA@@@@B@@@B@@@@BB@@@@@@@BB@@B@B@B@@@@@@@B@@@@@@@B@@@@@@@@@B@@@BA@@B@@@@@@@B@@@@@BB@@B@@@@@BB@@@@@@B@@@BB@@B@@@@B@@B@@@@@@@@@@@BB@@B@@B@@@@B@@@B@@@@@B@@@@@@A@@B@@@@@BA@ABA@@@@B@@A@@B@@@@@@AB@@@@@@A@@@@B@B@@@B@B@@@B@@A@@@@@@B@@AB@@@@@@@@@@A@@A@@A@@B@@A@@@@@@@@@A@@@@@@@AB@@@@@@A@@@@B@@A@@@A@AB@@@@AB@@@@@@@@@B@@@@@B@@BB@@@@@B@@@@@@@@BB@@BB@@@@@@B@@@@BBB@@@BB@@@@@@@@@B@@B@@@B@@@@@B@@@B@BA@@BA@@B@@@BB@@@@B@@AB@@@@@@@B@@@@B@@B@@B@@@@BB@BB@@@BB@@BB@@@@@BB@@@@@B@@@B@@@@B@@B@@@@@B@@@B@@@BA@@B@@@BBB@@@B@B@B@B@B@B@B@@@@@B@@@@@B@@@@@B@@@@@@@B@@BB@@@B@B@@@@@BA@@B@@@@@B@@@B@@@B@@B@AB@@@B@@@@@@@BBB@BB@@@@B@@@B@@B@@BBB@@@BB@@B@@@@@B@@@@@B@@@B@@@BAB@@@BAB@@@B@@@B@BB@@BA@@B@B@B@@A@@B@@@BB@@B@BB@@B@@@B@@@B@@@@@@A@@@@@A@@@@BA@@@@@@CA@@@A@@@A@@@@@A@@B@@@B@B@@AB@@AB@@A@@BAB@BAB@@@BA@@@@BA@@BA@@@A@@B@@@B@@@@@@BB@BBBBBBB@@@@@B@@@BBB@B@B@@@B@BB@@BBB@@BB@@@@B@@B@@@@@B@BA@@B@B@BAB@@@B@BA@@B@@@@@@@B@@B@@B@@@@@@@BBB@@@B@@@@@B@B@B@@@@@BB@@@B@@@B@@B@@@@@@@BAB@B@@A@@@@@@BABA@@B@@@B@@@BA@@@@@@B@D@@BB@B@@B@@@@@B@@@B@@BBBB@@@@B@@@BB@BB@@@@@BB@@B@@@BBBB@@@B@@@@@@@@B@@@@B@@B@BA@@@@B@@@BA@@BA@@B@BA@@@@BBD@B@BBD@@@@@@@B@B@@@B@@A@@@@@@B@@@@@@@@@@A@@@@B@@A@@B@BA@@B@@@@@B@@@@AB@@@B@@@@AB@@@BA@@B@B@BA@@B@@@@@B@@@@@@@BA@@B@@@B@@@@@B@@@B@@@B@@@B@@A@@@@B@@@B@@@@AB@@@@@@@@@@AB@@@@@@A@@B@@@BAB@@@B@@AB@@@B@@@B@@@@@@@BA@A@@B@@@BA@@BA@@B@@@@AB@@@@@@A@@@@BA@@@@@@@@B@@@@@BBB@@BB@@@@@@@B@@@B@@@B@@@@@B@B@B@B@B@B@@@B@@@B@@A@@@@B@@@BA@@@AB@@@B@@@@@@@@@@A@@B@@@@@@@@A@@@A@@@@@A@@@A@@@A@@@@@A@A@@@A@@BA@@@@@@@A@@@@@A@@B@@A@@@@B@B@@@B@@@B@@AB@@A@@@AB@@AB@@AB@@@@A@@@@@@BA@@@@BA@@@@@A@@B@@A@@B@@@B@@@@A@@@@@A@@@@@A@A@AB@@ABA@AB@@A@@@@@@@@@@@@A@@@@AA@@@AA@@@@AA@@@@@@@@A@@BA@A@ABA@A@A@@@@@AAA@@@@@@@@@B@@A@A@@@@@@@@@AB@@@@A@@@@@@@@A@AA@@AA@@A@A@@A@@@@AA@@@@@A@A@@@@@AA@@@AA@@@@@A@@@@@@@A@@B@B@@AB@@@@@@@@A@@@@AA@@@@AAA@@@@@@@@@@@@A@@@@@A@@@A@@@@@@@A@@@@@@BA@@@AB@@@@A@@@@@@@@BA@@@@BA@@@A@@B@@@@AB@@@@@@@@@@@@@@AB@@@@AB@@@B@B@BA@@B@BA@@@AB@@@@@B@@A@@B@@@@@@A@@@@@@@@@A@@@@B@@@BAB@B@@@@@B@BA@@B@@@@@@A@@A@@@AAA@@AA@@AA@@AAA@@@@A@@@AA@@A@@@@@AA@AAAAAA@@A@@A@AA@@AA@@A@A@AA@@A@@@@@@A@@@@@@BA@@@AB@@@B@B@@@@@B@@@BA@@@@B@@@B@@@@@@A@@B@@ABA@@@A@@BA@@@AB@@ABA@@B@@AB@@@BA@@B@@@@@@@@@@AA@AA@@AA@@A@@A@@@@A@@A@@@A@@A@@A@@@A@@@A@@@A@@@@@A@@@A@@B@@AB@@@@@@@@A@@@@@A@@AA@A@CAA@AAA@AAA@A@@AA@@@A@@@@@A@@BA@ABCBCBC@@BCBCBC@ABA@@B@@@D@BA@@@@B@@A@@@A@@A@AAAACA@AA@AACAA@AAAAA@A@@A@@@@@@@@@@@@BAB@BAB@@ABA@@@@@A@@@A@A@@A@@@AA@@A@@AA@A@@@@AA@@A@@@@AA@@@@B@@@@@@A@@@@@A@@A@@AA@@@@AA@@A@@@@B@@A@@@@B@@A@@B@@@@A@@@A@@AA@@@A@A@@A@@@@A@@A@@A@@AACA@@@@@@AA@A@@@@@A@@@@@@@@AA@@CA@@AA@@A@@A@@@AA@@A@A@@AAA@@A@@A@@@AA@@A@@@@A@@AA@@@A@@@A@A@@A@@A@AA@@A@AAA@AAA@@AAD@B@B@@@B@B@@@BA@@@@@@@A@@@AB@@@@A@@BA@AB@@@@@@A@@@@@@@@@AB@@@B@@@B@@@BA@@@A@A@@@AB@@A@A@@BA@@@@@@B@@A@@BB@@BA@@@@B@@@@AB@@A@@@AB@@B@@BBB@BB@@BB@@BBB@BB@@B@@@@@@@@@B@@@@@B@@A@BB@@@B@@@BB@@@@B@@@BB@BB@@BBB@@B@@@@@B@B@@@B@@@@@@@@@B@@@@@BBD@B@BBB@@@@@@@@A@AAA@@@A@@@A@A@A@A@@@@@AA@@A@@@AA@@A@A@@@A@@AA@@@A@A@@@@@A@A@@@A@@@AA@@A@@@@@A@@@@@@B@@A@@B@BABA@A@@BA@@@@AA@A@@@@@A@@@@@A@@@A@@@A@C@A@A@AB@@@BAB@B@H@FBD@B@B@F@B@@@B@B@B@BBB@@@B@D@D@B@@@B@@@BAB@@@B@D@F@B@BB@@B@@@BB@@@B@@@B@B@F@BA@@@@@@B@@@@@@@@@@@@B@@BB@BBB@@@B@@BB@BB@@B@@@DBB@B@B@BB@@@@@@B@@@@@@@@@@A@@@@@AB@@A@@@AB@@A@@BA@@BAB@@AB@BAB@@@BAB@@@@@@@@@B@@@@@@@AA@@@@@A@@@C@@@@@A@@@ABAB@@A@ABA@@@ABA@A@@@@BA@@@@@AB@@@@@BA@@@ABC@A@ABA@@@A@@@@B@@A@@B@B@D@B@@@B@@@@@BA@@B@BAB@B@BAB@B@BAB@B@BAB@@@BA@@@AB@@@@@@A@@B@BA@@BAB@B@B@B@@@B@B@B@@@BA@@B@@@@@B@@@@@B@@@@@B@B@B@B@B@DAD@D@BAD@BAB@B@B@@AB@BA@@BA@@B@@@B@@BB@@@B@@B@@B@@@@@@@@@@@@B@@@BA@@B@B@B@D@@@BB@@BB@B@@BB@@BB@@B@@@@@BABB@@@@BBB@BBB@@B@@@BBB@B@@@BB@@BB@B@BBB@@@BB@@BBB@B@@@B@B@@@@@@@@B@@@@@D@B@B@BB@@B@@@BB@@@B@@@B@@@B@@B@@B@@B@@@@B@@@B@@@B@B@@B@BB@@B@B@BBB@B@BBB@@@BBBBB@BB@@@@@@@@BB@@@D@@@B@@@@@@@@@BB@B@@BBBBBB@@B@@@@D@B@@@DBB@D@B@BB@@B@@@@@B@@AB@@AB@@@BA@@@@B@@@B@@@BB@@@@B@@@BAD@@@BA@@@@@@A@@A@@@@@@@A@@@@@AB@@ABA@A@@BA@ABAB@BA@@BAFAHAB@BAD@B@B@BA@@BAB@@@@A@@@A@@@A@A@A@A@ABA@AB@BA@AB@@@D@B@@@BAB@@@@@BABA@@@@BA@@BA@AB@@@@ABABA@@BA@@B@B@B@DAB@@@@@B@@@@@@@@A@@@A@@BA@@@A@@B@@AB@B@BAB@B@B@@@@@D@B@@@@@@@@@@@@A@@AA@@@A@ABA@@BA@@@A@@@@@AB@@@@@@A@@B@@A@@B@@@@@@AB@@@@A@@@@@A@A@@@@@@@AB@B@@AB@@@@@BA@@@@B@BA@ABCB@BAB@@A@@B@@@B@@@@@@@@@B@@@@@BBBB@@B@BBD@B@B@DBB@BBB@D@BBD@B@BBB@B@B@BBB@@@B@@@BBB@@BB@BBB@@@B@BBD@FBB@DBB@DBD@BBB@DBB@@@B@@@B@B@B@@@BB@@@@B@@B@@@B@@@D@B@B@@@@A@@@@BB@@@@@@AB@@@B@B@@@@@BA@@B@@A@@B@@@B@@@B@BBB@@@@@B@@@B@@@BAB@BA@@BA@@@AB@BAB@@A@@B@@AB@@AB@BA@@BA@@B@@AB@@A@@@@B@@A@@B@@A@@@@@@@AA@@@AA@@@@B@@@@@@AB@BABAB@@@BA@@@A@@AA@A@@A@@@@@@@@A@@B@@@@@BA@@BC@A@@B@@A@@B@B@@@D@@@B@BAB@B@@@@@B@B@@@B@@@BAB@B@B@B@@@B@@@B@B@@@B@@@BA@@B@@@@@@@B@@AB@D@BAB@B@BAB@@@B@@@@AB@@@BA@@B@@AB@@@BA@@B@B@@@D@B@BA@@B@B@B@DAB@B@D@B@D@BAB@B@D@B@B@D@D@DBD@D@D@D@B@B@B@@@D@BBB@@@@@BB@B@@@@@B@B@@@BBD@B@@@BBB@BA@@@@B@@@B@@@@BB@@B@@@@BB@@@D@@BB@@@@@@@@@@B@@@@BB@@BB@@B@@@BB@@@BBB@@@B@@@BA@@@B@@@B@B@B@B@B@B@B@@AB@D@@@B@@@B@@BB@@@B@B@@@B@@@B@B@@@B@B@@@B@@@BB@@@B@BB@A@BB@@@@@B@@@B@B@@@@@B@@A@@@ABA@@@@B@@@@@@@@@@B@@BB@B@@@B@B@B@DB@@DBB@@@BBB@BBBB@@@BB@@B@@@B@B@@@B@@@@@B@@@@A@@B@@@@BB@@BBB@BB@@@B@@@B@@BB@@BB@@@@BB@@@B@@BB@@B@@B@@BB@@@@@@@@@B@@@@@@@@@BB@@@@B@B@@B@@BB@BB@@B@BBDB@@@BB@@@@@@@B@@@@A@@BA@AB@@@@A@@@@@AB@@A@@@@B@@@B@B@@@B@@@B@BB@@B@BBB@B@B@@@@@@@@@@@@@@@@A@@@@@AB@@AB@@A@AB@@@B@@AD@B@@AB@@@@@@@@@@A@@@@@A@@A@@A@@B@@AB@@@@A@AB@@@BA@@BA@@@A@A@@B@@@@@B@BB@B@BB@B@B@BBB@@@@@@@@@@@@@BA@@@@@A@@B@@AB@@@B@@@@@@@@AAA@AAA@@@A@@@A@@BA@@@AB@@@@@@AA@@@@A@@@@B@@@@A@@@@BA@@@@B@@@B@@@BA@@B@@@@A@@B@@@B@@@@@B@@@BBB@BBB@B@BBB@@@B@B@@@BAB@B@BA@@B@@A@@@@@@@@@A@@AA@AA@@A@@@@@AA@@@AAA@@A@@@A@AAAAA@A@@@@A@@AA@AA@@@AAA@A@A@A@ABA@A@A@A@A@C@@A@@A@@A@@AAA@@@A@A@@@@@AA@@A@@@@@AAC@@@@AA@A@@AA@@@@@C@@@A@@A@@@A@AA@@A@@@A@A@AA@@A@@A@@@A@@@A@@@@@A@A@@@@@AAA@@@AA@@A@@@@A@@AA@@@A@@@@A@@@@@@@@A@@A@@@A@@@@@AA@@A@A@A@@AA@@@A@@A@@A@@@@@@@AB@BA@@BA@@B@BA@@@@@@@@@@@@@AA@AA@@@A@@@AB@@A@@B@@AB@@A@@@@@A@@@@@A@@@@@A@@@AB@@A@@@@@@B@@A@@@A@@B@@A@@@@@AA@@@B@@A@@BA@@@@@A@@@@@AB@@A@@@AB@@A@@@A@@@A@A@AAA@@@A@A@@@A@@@A@AB@@A@@@A@@@@@@@@A@@@@@@@AA@@A@@@A@@@A@@@@@A@@A@@@@@A@@A@@@A@@AA@A@A@@@@@@A@A@AAA@@@@@@@@@A@@@A@@AA@@@AAA@@@@@@A@ABC@ABC@CBA@ABA@@@A@A@@@A@@@A@@@@@@B@@@@@BA@@@@@A@A@@@AAA@@@@@AA@@A@@@@@AA@@A@@@@A@@A@A@A@A@A@A@@@@@A@@B@@@@@@@@@@@@@@A@BA@AAA@@A@@AA@@@@@@A@@@A@@@@@@@@A@@A@@A@A@@@@@@@@@AA@@@@@@@@A@@@A@A@AA@@AA@@@@@@AA@@AA@@@A@@@@@A@@AAAA@@@@A@@@A@A@@@A@@@A@AB@@A@@A@@BA@A@AA@@A@AAA@@A@@A@@@@@@A@@@@@@A@@@A@@@@AA@@@@@@@@@AA@@@@A@A@@B@@@@AC@A@C@ABA@@@CAA@A@@AA@A@@AA@@BA@A@@@@@A@A@@A@@A@A@AAA@A@A@@@A@@@AA@@@@BA@@@AA@@@@@AA@@@A@@@AAA@@@@@@BABA@@BA@@B@BA@@BA@@@A@A@@BA@@@@@AB@@@@A@AB@@A@@@AB@@@@AA@@@@@AA@@@@@@AA@@@@AA@@AA@@@@@A@@BA@@@A@@@A@@A@@A@@A@@AA@@AA@@AA@@@A@AA@@A@A@A@@AA@A@@A@@A@@A@@@A@@@A@A@A@@@@@A@@A@A@@@A@A@@@CA@@A@AA@@A@@AA@@@@AA@@@@@A@CAA@CACAC@A@AA@@@@A@@A@@@@BA@@@@@AAAAAAA@A@@@AAA@@@@@@AAA@@@A@A@A@@@A@@@@@AAAA@@@@@AA@@@@@A@@@@AA@@@@AA@@@@@@@@A@AA@@A@@AA@AA@@@@@@A@@@@A@@BA@@@A@@@AA@@A@@@@@@@A@@@@@A@@AA@A@@@A@@@A@@A@@A@@@A@C@A@A@@@AAA@@@A@@A@@AA@@@@@A@@@A@@@@@@@A@@@AAA@A@@A@@@@@A@@@AA@@A@A@@AA@@@A@A@@@ABA@AB@@@@@@A@@@@@A@@A@@A@@AAA@@A@AAA@AAA@@AA@A@@@A@A@A@A@A@@@@@A@AAA@AAA@AA@@@@@A@@AA@@@AA@@@AA@@@AA@@A@A@@A@@A@@@@A@@@A@A@A@@A@@@@A@@A@AAA@A@CAC@A@@@A@@B@@A@@@A@A@@@@@AAA@A@@@@AA@A@@@AAA@@@@@@@AA@@@A@@@@@@@@@@@@A@@@@@@@@@A@@A@@AA@@@A@@@A@A@@@A@@@@@AA@@@AA@@@A@@@A@@@A@@@ABA@AB@@A@@@@@A@@AA@@AAA@A@@AA@@@@@@A@@AA@@@A@@@A@@@@A@A@@A@@@A@AAA@@@A@@A@@@A@A@@@AA@@@@AA@@@@A@@@@@@@A@@B@@@@A@@@@@@AAAA@@AA@@AA@@@@@B@@A@@@A@@@A@@@A@@AAA@A@A@@AA@@A@@@AB@@AB@@A@@@@@A@ABC@A@A@A@@@AAA@AA@@@@@A@ABA@A@A@A@A@@@AA@@@@@AA@@@@CE@AA@@AA@@A@@@A@@@A@@@A@@A@@AA@@A@@@A@@@A@@@AA@CAAA@A@@@A@AAA@@AA@@@A@@@@BAA@@@@A@@@A@@@@AAAA@@BADC@A@@@AB@BAB@@A@@B@@A@@AA@@AA@A@C@@B@BA@@B@@AB@@A@@@A@@B@@ABCBABA@@BAB@B@DA@@B@@@@@C@CA@@A@@A@A@AAA@@@A@@BAB@@ABA@A@A@@@@@A@@@A@A@@@A@@@@A@A@A@A@A@AA@@AAACCC@C@@@@@A@@@A@@CC@@@AA@@@@@A@A@@@A@@@@@AAA@@@A@A@@@A@@@@@A@@EAA@A@@A@@A@@@@A@@@@A@@AA@@@@A@@@ABA@E@A@@@@@@@@@@A@@AA@A@ACA@@AACCA@@@@C@AAA@CAAA@@AAAAA@@AACAA@AAA@A@@A@@@AB@@@@AB@AA@C@C@A@AA@@@@AGCA@@AAA@@@A@@@A@@@ABA@@BA@@@A@@@ABE@CBA@@BA@@DAD@B@@A@@@@@@@@@@B@@A@ADAF@DAF@FA@@B@B@@@BAB@DABA@@BA@@@ABA@A@A@A@A@@AAB@BA@@@ABA@A@CA@@@@@A@@AC@@@A@@@A@A@A@A@@@C@A@@AA@@@AA@AAAAAAAAAA@AAA@AAA@AA@@CAC@@@CAAAAAC@@@AACAAACA@@@@A@A@@@A@@AB@BABAB@@ABA@@@A@@@@@AA@AAA@AAAA@@@@AA@@@ABAB@@AB@@AA@@AC@CAA@A@C@A@A@A@C@A@C@E@A@C@@@C@@@A@A@@@@@AAA@@A@A@@BA@A@AAA@@AA@A@@@A@@@@AA@@A@@A@@AAA@@@A@@@A@@@A@@@AAA@@@@@A@@BA@@@A@@@A@@AA@@@A@@@A@@@A@A@@@A@@@A@@@A@@B@@@@@@A@@@A@AB@@A@C@@@A@@@A@@AA@@@AA@@A@@AB@@@@@AA@@A@A@AAAAAAAA@A@@A@CA@@A@A@@@@@AA@@A@@@A@@AA@@@@@@@AA@@@@A@@@AA@@A@@BA@A@@@A@A@@@A@@@@@A@@@A@@@A@@B@@A@@@@@A@@@@@A@AA@@A@@@@@A@A@@@@@AA@@@@A@@@A@A@@@A@@@@@A@@@A@@@@@A@A@A@A@@@@@A@A@A@@AA@@@@@@@@A@@AA@@@@A@@@A@AAA@@@AA@@AA@@@A@A@@@A@@AA@@@AA@AA@@@@C@A@C@A@A@A@A@A@@AC@A@A@@@A@@@A@A@A@C@ABA@@@A@A@A@A@C@A@A@@@AB@@A@A@@@A@A@A@@@A@CAAA@AA@A@@@@@A@@@A@@@@BA@A@ABC@@@A@A@A@@@@@A@@@A@@@A@A@A@@@A@ABA@A@@BA@@@A@C@AAA@@@A@AAAA@@AAA@@@A@@A@@@@@A@AA@@A@@AAA@@AAA@A@AAA@A@@@C@@AA@@A@@A@@AB@@A@@@A@@@@@A@@AA@@@@@AA@@@A@@@AAA@@AA@@AA@A@@@A@C@A@A@@@AA@@A@@AAA@@A@AA@@A@AA@@AA@@A@AA@@A@@A@@@A@@@AA@@A@@A@@@@@@A@@@A@A@@@A@A@AB@@A@@@CB@@A@@@A@@B@@A@@@A@@@A@@@A@@@A@@B@@A@@@A@@@A@@AA@@@CA@@@@@A@@@A@@BA@@B@@@@A@@@@@@AA@AA@@@AB@AA@@@@A@A@@@@BA@A@AB@@A@@@A@@@@@@@A@@B@@ABA@@@@@ABA@@AA@A@@@A@@@@@@@AA@@@@A@@@@@@@A@@@@A@AA@@@@@ABA@@@ABABABADAB@@AB@@AAA@A@@@A@@BA@A@@@@BA@@A@@A@@@A@@A@@A@@@@@@@A@A@A@ABA@@@A@@@@A@@@A@@@@@@A@@@A@@@@AA@@A@@@A@A@@@A@@@A@@@@@A@@@@@AB@@@@@AA@@@@@@AB@@@AA@@A@@@@ABA@A@@@A@@BA@@A@@@AA@@@@@@B@@AB@@@@@@A@@B@@A@@@A@A@@@@@@@AA@@@@@BA@@@A@@B@BA@@@@BA@@@@B@@@B@@AB@@@BA@@B@@A@@B@@AB@B@@@B@@@@A@@BA@@@A@@@A@@@@@@BA@A@@@@AA@@@@@A@@@@B@@@@@B@@AB@@A@@B@@@@@@@B@B@@@@AB@BABA@@@A@@@A@@A@@ABA@@@@BA@@@A@AA@@@@AB@@A@@@@A@@@@@A@A@@AA@@A@@AA@@@@@A@@@A@A@AA@@AA@@AA@A@@@@A@@@A@A@@@@AA@@A@@@A@@@@A@@B@@ADA@@@@B@@@BA@@@@B@@@B@B@@@@@B@@AB@@@@@A@AA@@AAA@@AAA@A@@AA@@@@AAA@@@@@A@@AAAA@@@@A@@@AA@@@A@A@@@AA@@A@@@A@AAA@AAA@A@@AA@A@@@A@@@@@@A@@@AB@@A@@@@BA@@B@@@@A@@BA@AA@@@@@A@AA@@@@@A@@@@@A@@B@@@@AB@@@@A@@A@AA@@@@@A@@@A@@AA@@A@@A@@@AB@B@@@BAB@B@@AB@@@@A@@@@@AA@A@@A@@@@@@@AB@AA@@@@AAA@@A@@@@BA@AB@@AB@@@@AA@A@@@A@A@A@A@@@@@A@A@@@A@AA@@@@A@@BA@@@A@@@AA@@@@A@@A@@A@@@@@A@@@A@@@AAA@@@A@@@AA@@B@@@@AA@@@@AA@@A@@@@AA@@BA@A@@BA@@@@@A@@@@@A@@B@@@@A@@@AB@@@DA@@BA@@B@@B@@B@B@@AB@@@B@@A@@B@@@@@BA@@@@@A@@@A@@@A@@@A@@@@@@B@@A@@@AB@@AB@@@@AB@@@B@@@@@@AAA@@@A@@A@@A@@BA@ABA@A@@BA@A@A@@AA@@A@A@A@@@AA@@AA@@A@A@@BA@@@A@@@A@A@A@@@AA@@A@A@A@A@A@A@C@@@C@@BA@@@A@@AA@@@A@@@C@AAA@A@A@AA@@A@A@@BA@A@@AA@A@@@@AA@@AE@@@A@@@@@A@@@AAAC@@AAA@@@@AA@@@A@CA@@A@@@A@@AA@A@@AA@A@@@@@@@@A@AB@@ABA@A@AB@@A@A@@BAB@@A@@B@@A@@BA@@@AA@@AA@@@@@@@@@@A@@@@B@@AB@@@@AA@@A@A@@@AAA@@A@@AA@A@@@@@@@@A@A@@@A@A@@@A@A@@A@BA@@@AB@@A@@B@@@@A@A@@@A@@@A@@BA@@BA@@B@@AB@@AB@@AB@@@@A@A@AA@@AA@@@@AA@AA@A@@AA@@@AA@@A@@@A@A@@BA@@@ABAB@@AB@BA@@@@@A@@@A@@@A@A@@@AB@@AB@@@BA@C@@BA@ABA@ABA@A@@B@@A@@@A@@@A@AA@@@@AA@@A@@AA@A@@@AA@@A@@@A@AA@@AA@@AB@@A@@@AA@@A@@@A@@@ABA@@B@@A@@@A@@@A@@B@@A@@@A@@B@BA@@B@BA@@BAB@B@@@@@B@@@B@BBBBB@@BB@@@@ABAB@@ABABA@@BA@@@A@A@@@A@@@@BA@ADADA@@@@BAB@B@@@@@B@@@B@@@@AB@@A@A@@@A@@BA@@B@@@B@@@BA@@@A@ABABAB@B@@@B@@@@ABA@@@@BAB@@@BAB@@@B@@@B@@@B@B@@@B@@AB@@A@@@A@@@@@A@@@@@AA@@A@@@A@@@A@@@AA@@@@@AA@@@A@@A@@A@@@@BA@@@A@@A@@@AA@@AAA@C@AA@@AAA@A@C@A@@@A@@@AA@@A@AA@@@@AA@@AB@@A@@AA@@@AB@@AAA@@@@AA@@@A@@@@@@A@@@A@@A@@@AAA@A@@@A@@@AA@@@AA@@@@AA@@A@@A@@A@@@A@@@A@@@A@@BA@@@@@A@@@A@@@A@@@A@@A@A@@AA@@@@AA@@@@AA@AAC@A@@@A@A@A@A@A@@@@@@@@AA@@AA@@A@@@@AA@@@A@@A@@AA@A@@@A@A@ABA@A@A@@AA@AAAA@@@AA@A@CAA@C@A@@AA@@@@A@A@AAA@AA@@@A@@@AAA@@@A@@@AA@@A@A@A@A@@@A@A@A@@AA@A@@@A@A@@@A@A@AAA@AAA@@@A@@@A@@@A@AA@@A@A@@AA@@A@AADCLmpMNILWfKTINGNEJMLGJ@F@FDPATEZCLEJe`KCYBiHYJGCKBMJ@FQ@aIUA[LYPWXADMLWX@BKLCB@@SN@@WRCBIHSJMFeVUJ@PFTJNRHDJKNILWJQH@@B@@@BB@@@@@@BB@@@@@@B@@@@BB@B@@@@B@@@B@@@@@@@@@BB@@@B@B@@@@B@@@B@@@@@B@@B@@BB@@B@@@@@BB@@@@@BB@@@@@B@@@B@@A@@B@@@B@@@B@@BB@@@BB@@B@@BB@@@@AB@@@@@B@@@@@@@@DB@@BB@@BB@@BB@@@@@@B@@BB@B@B@BBB@@@B@B@@@B@@@B@@B@@@@@@B@B@@@@B@@ABA@A@@B@@B@@B@@@B@@@@@@BBB@BBB@@@BBB@@@B@@@BB@@@@B@B@B@@BB@@B@@@B@BBB@@@B@@A@@B@@@@BB@B@B@@@@@D@B@@BB@B@@@@@B@@@@B@B@B@B@B@BAB@@@@@@BB@@B@@B@@@B@B@B@@@BBB@B@B@B@BBBBB@@BB@@@@@B@@@B@@@B@@B@@@@BBB@B@@@B@D@@@@BB@@B@@@B@@BBB@@@B@B@BB@@@@@@@B@@@@@BB@@B@@BB@@@@B@B@BBB@BB@@B@BBB@B@@AB@@AB@@@@@BB@@@B@BB@@@@@B@@A@@@@@AB@B@BA@@@@D@B@B@B@@@B@@@B@@@B@@@B@D@D@BBB@B@B@B@@@B@B@B@@@@@@@B@@@@B@@@B@B@@@@@@BBB@BB@@B@@BDBB@@BB@@@B@@BB@@ABBB@@@B@B@B@@@@@@AB@@@B@B@B@B@@@B@B@@@@BB@@@B@B@@BB@@@BB@@B@@BB@BBB@@@B@@@B@@B@@BB@@@@B@B@B@@@B@@@@B@@@BA@B@@B@BB@@@BB@@@@@B@@@BA@@B@@A@@D@@@B@@@BB@@@@B@B@@@BBB@BA@BB@BB@@BB@@@BBB@@@@B@B@@BB@@@BB@@@@@@@B@@@B@@@B@@BB@B@@@B@@@BB@@B@B@BA@@B@BBB@@@@@B@@@@@@@B@@@@BB@@B@@@BB@@@B@@@B@@@B@B@BBBB@@BB@@B@BBB@BB@@B@@@@B@B@B@D@@@B@@@@ABA@@@ABA@ABA@@@A@ABA@@@A@@BA@A@@@A@A@ABA@A@@@A@A@A@A@A@@@A@@@AA@B@@AB@@ABA@@@A@@BA@@@@B@@A@AB@@CB@@@BA@A@AB@@@@A@@BA@@BBB@@BB@@BB@@@B@B@@A@AB@B@@BB@@@@@BA@@B@@@@@BB@@BBB@@@@@B@@@BB@@BB@@B@@B@@@B@@@B@@@BBB@B@@@B@B@@@BA@@@@B@@@@B@@BBB@@@B@@@@@B@@BB@BBB@@B@BBB@@B@B@@@B@B@@@B@@@@@BB@@B@BBBBBDB@ABB@AB@@@@BB@@@BB@@B@@@B@BB@@B@@BBB@@@@B@@@B@@@@@BAB@@@B@B@@@B@BBB@B@@@B@@AB@@@B@@AB@@@B@B@@@BA@@B@@AB@@@B@@BB@@@B@@@@@B@@@B@@@B@@@@@B@@@B@B@@AB@@BB@@@B@B@@@B@@@@@B@BA@@B@@AB@@AB@B@@@B@@AB@BBB@B@@@B@B@@@@AB@BA@@BBB@@@@@BBB@@BB@@@BB@@@@@BB@@BB@@@@@B@@@@@B@B@@@@BB@B@@@B@B@@BB@B@B@B@B@@BB@@@@@B@@@BB@@B@@@B@@@@AB@@AB@@A@A@@BA@@@@B@@@@BB@@@B@@@BB@@@@B@@@B@B@@@B@B@@@@@B@@@B@@@@AB@@@B@@]@aBKNATVL^ClQ@BB@@BB@BBB@B@@BB@@B@@BB@@BB@@@B@BB@@B@B@@@B@@AB@B@@@@A@BB@BB@@B@B@@@@BB@@@B@B@B@@@D@BB@@B@@@BB@@@@BB@B@@B@@@@@B@@@@@B@B@B@@@B@@AB@B@@@@@BB@B@@B@@@@@BA@@@AB@@A@A@@@AB@@AB@@@B@@@B@@@B@BBB@BA@@B@BB@@@BB@@B@@B@B@@@BBB@@BB@B@@@B@@BB@B@BBB@B@B@@@B@@@BB@@B@B@B@@@B@BA@@@@@@B@@AB@@@@AB@@A@@@@@@B@@@@@BB@@B@BB@@B@@@B@@B@@B@@B@@@@BB@@BB@@@B@@@@@B@@@B@@@@@@@@B@@B@@@@@@B@@B@@BB@@@B@@@@B@@B@@B@@@@@@@BB@@B@@@B@@B@@B@B@@@B@B@@@@@B@@BB@@@@@@@B@@@B@@A@BB@@@@@B@@@BB@@BB@@@@BB@@@@@B@@@BAB@@@BB@@B@@AB@@@@B@@@BB@@@@B@@@@@B@@@@@B@@@B@@@@@BBB@@@B@@@B@B@B@@A@@BA@@BA@@B@@A@@BA@@BA@@@A@@B@@A@@@@B@B@@BB@@BB@@@@@@BB@@@@@B@@BB@@@B@@@BA@@B@@A@AB@@@B@@@B@@@@@B@@@B@B@@@@@@ABB@@@@B@@B@@@@B@@BB@@B@@@BBB@@@B@BB@@B@BBB@@@B@@@BB@@@@BB@@BB@@@BB@@B@B@@BB@B@B@@@@@B@B@@@@B@BBB@@@BB@@@B@@@B@@@B@B@B@B@B@@@B@B@@@BBBA@@@A@@@ABA@@@A@AB@@A@@@AAA@A@A@@@AB@@@@AB@@A@A@A@ABA@AB@@@B@@@B@@@B@@@@@@@BB@@B@@BB@@BB@B@@B@@@BB@@B@@B@@@B@@@BB@@BB@@@@@@BB@@@@B@@B@@B@@@@A@@B@@@B@@@@@@@B@@B@@@BB@@BBB@@BB@@BB@@@B@@@B@B@@@BA@@@@@@BB@@@B@@B@@B@@BBB@@@@B@@@B@@AB@@@B@@BB@@@@BB@@@B@@@@@B@@@@@B@B@@@B@@A@@B@@@B@@@@@@@B@@@B@@@@@B@@AB@@@BA@@@@@AB@@@@@B@B@B@@@BA@@@@BA@@@@@@B@@@@@B@@@@@@BB@@@@@@BB@@@@A@@@@@@BA@@BAB@BA@AB@BA@@BBB@@@B@@@@@@A@AB@@@@AB@@@B@@@B@@AB@@@@A@@@@B@@A@@B@B@@@@BB@@@@@@@B@@@@A@@B@@@@AB@@AB@@@@AB@@A@A@@@A@A@A@@@A@@@A@@BA@@BA@A@AB@@@@A@A@A@@@A@@@A@@AA@@@A@A@A@@@@@@@@AA@A@A@@@A@@@C@AAA@C@@@A@@BA@A@@AA@A@AA@AC@@@@@@@AACB@@A@@@A@AB@@A@A@A@AA@@AB@@@@AB@@A@@@A@A@@@@@C@AAA@@@@@@@AB@@A@@@@@A@A@A@A@@@A@A@@BA@A@@@@@@@AA@@@@@@@@@@AA@A@AAA@AA@@AC@@@AA@@@AA@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@A@A@A@@@A@@@C@@@@@@@@@@@@@@A@@@AAA@@@A@A@AA@@@@@AAAAA@@AAA@@@@@@@A@@AA@A@@@A@@A@AA@BA@@@@@A@@@A@@@A@@@@@@@@@@@@@@A@@@@@A@@@A@@AA@@@@@@@@@AB@@@A@BA@@@A@@@@A@@A@@@A@@@A@@@@A@@A@@A@@@@@@@B@@@@@@@@A@@@A@A@A@@@@@AB@@@B@@@B@B@@@B@@AB@@@AA@@@A@A@@@AB@@AB@@@@A@@AA@@@@@A@@A@A@@AA@@AA@@A@@@AB@@A@A@@@@@@AA@@A@@@A@AAA@A@@A@@A@A@@@@@AAA@@@AA@@A@@@AA@@C@A@A@A@@@AB@@@@@@@BA@@@@@@@A@@B@@@@@BA@@@A@@B@@@@AB@@@@@@A@@@@@A@@@A@A@A@@@AAA@@@@@A@@@A@@@AB@@A@A@@@A@A@@@A@@@AAA@@@CA"],"encodeOffsets":[[132943,46547]]}}],"UTF8Encoding":true});}));