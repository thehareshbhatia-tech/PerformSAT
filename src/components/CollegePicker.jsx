import React, { useState, useMemo } from 'react';
import { collegeData, calculateMedian } from '../data/collegeData';
import { colors, radius, transitions } from '../design/tokens';

// College domain mapping for favicon URLs
const collegeDomains = {
  // === ELITE (770-800) ===
  'mit': 'mit.edu',
  'caltech': 'caltech.edu',
  'carnegie-mellon': 'cmu.edu',
  'harvey-mudd': 'hmc.edu',
  'princeton': 'princeton.edu',
  'stanford': 'stanford.edu',
  'harvard': 'harvard.edu',
  'yale': 'yale.edu',
  'columbia': 'columbia.edu',
  'uchicago': 'uchicago.edu',
  'duke': 'duke.edu',
  'upenn': 'upenn.edu',
  'rice': 'rice.edu',
  'jhu': 'jhu.edu',
  'northwestern': 'northwestern.edu',

  // === HIGHLY SELECTIVE (740-769) ===
  'brown': 'brown.edu',
  'dartmouth': 'dartmouth.edu',
  'cornell': 'cornell.edu',
  'vanderbilt': 'vanderbilt.edu',
  'notre-dame': 'nd.edu',
  'washu': 'wustl.edu',
  'georgetown': 'georgetown.edu',
  'uc-berkeley': 'berkeley.edu',
  'ucla': 'ucla.edu',
  'usc': 'usc.edu',
  'umich': 'umich.edu',
  'uva': 'virginia.edu',
  'georgia-tech': 'gatech.edu',
  'nyu': 'nyu.edu',
  'tufts': 'tufts.edu',
  'boston-college': 'bc.edu',
  'emory': 'emory.edu',
  'unc': 'unc.edu',
  'wake-forest': 'wfu.edu',
  'william-mary': 'wm.edu',

  // === SELECTIVE (700-739) ===
  'boston-u': 'bu.edu',
  'ucd': 'ucdavis.edu',
  'ucsd': 'ucsd.edu',
  'ucsb': 'ucsb.edu',
  'uci': 'uci.edu',
  'ucsc': 'ucsc.edu',
  'ucr': 'ucr.edu',
  'case-western': 'case.edu',
  'tulane': 'tulane.edu',
  'northeastern': 'northeastern.edu',
  'brandeis': 'brandeis.edu',
  'lehigh': 'lehigh.edu',
  'villanova': 'villanova.edu',
  'rochester': 'rochester.edu',
  'rpi': 'rpi.edu',
  'stevens': 'stevens.edu',
  'virginia-tech': 'vt.edu',
  'purdue': 'purdue.edu',
  'uiuc': 'illinois.edu',
  'uw-madison': 'wisc.edu',
  'psu': 'psu.edu',
  'osu': 'osu.edu',
  'uf': 'ufl.edu',
  'umd': 'umd.edu',
  'uw': 'washington.edu',
  'ut-austin': 'utexas.edu',
  'texas-am': 'tamu.edu',
  'miami': 'miami.edu',
  'smu': 'smu.edu',
  'tcu': 'tcu.edu',

  // === COMPETITIVE (650-699) ===
  'indiana': 'indiana.edu',
  'msu': 'msu.edu',
  'umn': 'umn.edu',
  'iowa': 'uiowa.edu',
  'colorado': 'colorado.edu',
  'rutgers': 'rutgers.edu',
  'uconn': 'uconn.edu',
  'vcu': 'vcu.edu',
  'clemson': 'clemson.edu',
  'syracuse': 'syr.edu',
  'pitt': 'pitt.edu',
  'temple': 'temple.edu',
  'drexel': 'drexel.edu',
  'fordham': 'fordham.edu',
  'gwu': 'gwu.edu',
  'american': 'american.edu',
  'auburn': 'auburn.edu',
  'alabama': 'ua.edu',
  'lsu': 'lsu.edu',
  'arkansas': 'uark.edu',
  'missouri': 'missouri.edu',
  'kansas': 'ku.edu',
  'nebraska': 'unl.edu',
  'oklahoma': 'ou.edu',
  'tennessee': 'utk.edu',
  'kentucky': 'uky.edu',
  'south-carolina': 'sc.edu',
  'georgia': 'uga.edu',
  'fsu': 'fsu.edu',
  'ucf': 'ucf.edu',
  'usf': 'usf.edu',
  'fiu': 'fiu.edu',

  // === ACCESSIBLE (550-649) ===
  'asu': 'asu.edu',
  'arizona': 'arizona.edu',
  'unlv': 'unlv.edu',
  'oregon': 'uoregon.edu',
  'oregon-state': 'oregonstate.edu',
  'wsu': 'wsu.edu',
  'utsa': 'utsa.edu',
  'uta': 'uta.edu',
  'utd': 'utdallas.edu',
  'uh': 'uh.edu',
  'txstate': 'txstate.edu',
  'ttu': 'ttu.edu',
  'sdsu': 'sdsu.edu',
  'sjsu': 'sjsu.edu',
  'fresno-state': 'csufresno.edu',
  'csulb': 'csulb.edu',
  'csuf': 'fullerton.edu',
  'csun': 'csun.edu',
  'cpp': 'cpp.edu',
  'cpslo': 'calpoly.edu',
  'unm': 'unm.edu',
  'nmsu': 'nmsu.edu',
  'utah': 'utah.edu',
  'usu': 'usu.edu',
  'byu': 'byu.edu',
  'cu-denver': 'ucdenver.edu',
  'colorado-state': 'colostate.edu',
  'wyoming': 'uwyo.edu',
  'montana': 'umt.edu',
  'idaho': 'uidaho.edu',
  'boise-state': 'boisestate.edu',

  // === LIBERAL ARTS ===
  'williams': 'williams.edu',
  'amherst': 'amherst.edu',
  'swarthmore': 'swarthmore.edu',
  'pomona': 'pomona.edu',
  'claremont-mckenna': 'cmc.edu',
  'wellesley': 'wellesley.edu',
  'bowdoin': 'bowdoin.edu',
  'middlebury': 'middlebury.edu',
  'carleton': 'carleton.edu',
  'haverford': 'haverford.edu',
  'davidson': 'davidson.edu',
  'colgate': 'colgate.edu',
  'hamilton': 'hamilton.edu',
  'wesleyan': 'wesleyan.edu',
  'colby': 'colby.edu',
  'bates': 'bates.edu',
  'grinnell': 'grinnell.edu',
  'oberlin': 'oberlin.edu',
  'vassar': 'vassar.edu',
  'colorado-college': 'coloradocollege.edu',
  'macalester': 'macalester.edu',
  'smith': 'smith.edu',
  'bryn-mawr': 'brynmawr.edu',
  'barnard': 'barnard.edu',
  'trinity': 'trincoll.edu',
  'bucknell': 'bucknell.edu',
  'lafayette': 'lafayette.edu',
  'gettysburg': 'gettysburg.edu',
  'dickinson': 'dickinson.edu',
  'skidmore': 'skidmore.edu',
  'union': 'union.edu',

  // === ART & DESIGN ===
  'risd': 'risd.edu',
  'parsons': 'newschool.edu',
  'pratt': 'pratt.edu',
  'saic': 'saic.edu',
  'cca': 'cca.edu',
  'otis': 'otis.edu',
  'scad': 'scad.edu',

  // === BUSINESS-FOCUSED ===
  'babson': 'babson.edu',
  'bentley': 'bentley.edu',
  'indiana-kelley': 'indiana.edu',

  // === ENGINEERING-FOCUSED ===
  'rose-hulman': 'rose-hulman.edu',
  'wpi': 'wpi.edu',
  'rit': 'rit.edu',
  'njit': 'njit.edu',
  'colorado-mines': 'mines.edu',
  'iit': 'iit.edu',

  // === HBCUs ===
  'howard': 'howard.edu',
  'spelman': 'spelman.edu',
  'morehouse': 'morehouse.edu',
  'hampton': 'hamptonu.edu',
  'famu': 'famu.edu',
  'nc-at': 'ncat.edu',
  'prairie-view': 'pvamu.edu',

  // === STATE UNIVERSITIES ===
  'umass': 'umass.edu',
  'uri': 'uri.edu',
  'unh': 'unh.edu',
  'uvm': 'uvm.edu',
  'maine': 'umaine.edu',
  'suny-buffalo': 'buffalo.edu',
  'suny-stony-brook': 'stonybrook.edu',
  'suny-binghamton': 'binghamton.edu',
  'suny-albany': 'albany.edu',
  'cuny-hunter': 'hunter.cuny.edu',
  'cuny-baruch': 'baruch.cuny.edu',
  'cuny-ccny': 'ccny.cuny.edu',
  'delaware': 'udel.edu',
  'wvu': 'wvu.edu',
  'hawaii': 'hawaii.edu',
  'alaska': 'uaf.edu',
  'ndsu': 'ndsu.edu',
  'sdsu-sd': 'sdstate.edu',
  'msstate': 'msstate.edu',
  'olemiss': 'olemiss.edu',

  // === PRIVATE UNIVERSITIES ===
  'loyola-chicago': 'luc.edu',
  'depaul': 'depaul.edu',
  'marquette': 'marquette.edu',
  'creighton': 'creighton.edu',
  'gonzaga': 'gonzaga.edu',
  'santa-clara': 'scu.edu',
  'lmu': 'lmu.edu',
  'usd': 'sandiego.edu',
  'pepperdine': 'pepperdine.edu',
  'san-francisco': 'usfca.edu',
  'pacific': 'pacific.edu',
  'seattle': 'seattleu.edu',
  'portland': 'up.edu',
  'denver': 'du.edu',
  'tulsa': 'utulsa.edu',
  'baylor': 'baylor.edu',
  'slu': 'slu.edu',
  'elon': 'elon.edu',
  'furman': 'furman.edu',
  'rhodes': 'rhodes.edu',
  'sewanee': 'sewanee.edu',
  'centre': 'centre.edu',
  'rollins': 'rollins.edu',
  'stetson': 'stetson.edu',
  'hofstra': 'hofstra.edu',
  'adelphi': 'adelphi.edu',
  'pace': 'pace.edu',
  'quinnipiac': 'quinnipiac.edu',
  'fairfield': 'fairfield.edu',
  'providence': 'providence.edu',
  'marist': 'marist.edu',
  'siena': 'siena.edu',
  'iona': 'iona.edu',
  'shu': 'sacredheart.edu',
  'hartford': 'hartford.edu',
  'suffolk': 'suffolk.edu',
  'clark': 'clarku.edu',
  'worcester': 'worcester.edu',

  // === ADDITIONAL ELITE/HIGHLY SELECTIVE ===
  'olin': 'olin.edu',
  'cooper-union': 'cooper.edu',
  'webb': 'webb.edu',
  'uchicago-harris': 'uchicago.edu',

  // === MORE UC SYSTEM ===
  'uc-merced': 'ucmerced.edu',

  // === MORE CAL STATE SYSTEM ===
  'csu-sacramento': 'csus.edu',
  'csu-east-bay': 'csueastbay.edu',
  'csu-bakersfield': 'csub.edu',
  'csu-chico': 'csuchico.edu',
  'csu-san-marcos': 'csusm.edu',
  'csu-stanislaus': 'csustan.edu',
  'csu-dominguez-hills': 'csudh.edu',
  'csu-la': 'calstatela.edu',
  'humboldt': 'humboldt.edu',
  'sonoma': 'sonoma.edu',
  'csu-monterey': 'csumb.edu',
  'csu-channel-islands': 'csuci.edu',
  'san-bernardino': 'csusb.edu',

  // === MORE SUNY SYSTEM ===
  'suny-geneseo': 'geneseo.edu',
  'suny-new-paltz': 'newpaltz.edu',
  'suny-oswego': 'oswego.edu',
  'suny-cortland': 'cortland.edu',
  'suny-fredonia': 'fredonia.edu',
  'suny-oneonta': 'oneonta.edu',
  'suny-plattsburgh': 'plattsburgh.edu',
  'suny-potsdam': 'potsdam.edu',
  'suny-brockport': 'brockport.edu',
  'suny-purchase': 'purchase.edu',

  // === MORE CUNY SYSTEM ===
  'cuny-queens': 'qc.cuny.edu',
  'cuny-brooklyn': 'brooklyn.cuny.edu',
  'cuny-lehman': 'lehman.cuny.edu',
  'cuny-john-jay': 'jjay.cuny.edu',
  'cuny-york': 'york.cuny.edu',
  'cuny-staten-island': 'csi.cuny.edu',

  // === MORE TEXAS SCHOOLS ===
  'utep': 'utep.edu',
  'utrgv': 'utrgv.edu',
  'sam-houston': 'shsu.edu',
  'stephen-f-austin': 'sfasu.edu',
  'tarleton': 'tarleton.edu',
  'lamar': 'lamar.edu',
  'unt': 'unt.edu',
  'twu': 'twu.edu',
  'midwestern': 'msutexas.edu',
  'tamucc': 'tamucc.edu',
  'tamuk': 'tamuk.edu',
  'tamuc': 'tamuc.edu',
  'wtamu': 'wtamu.edu',

  // === MORE FLORIDA SCHOOLS ===
  'fau': 'fau.edu',
  'fgcu': 'fgcu.edu',
  'unf': 'unf.edu',
  'uwf': 'uwf.edu',
  'fpu': 'floridapoly.edu',

  // === MORE PENNSYLVANIA SCHOOLS ===
  'west-chester': 'wcupa.edu',
  'millersville': 'millersville.edu',
  'kutztown': 'kutztown.edu',
  'shippensburg': 'ship.edu',
  'bloomsburg': 'bloomu.edu',
  'slippery-rock': 'sru.edu',
  'iup': 'iup.edu',
  'clarion': 'clarion.edu',
  'edinboro': 'edinboro.edu',
  'lock-haven': 'lockhaven.edu',
  'mansfield': 'mansfield.edu',
  'east-stroudsburg': 'esu.edu',
  'la-salle': 'lasalle.edu',
  'st-josephs': 'sju.edu',
  'duquesne': 'duq.edu',

  // === MORE OHIO SCHOOLS ===
  'miami-ohio': 'miamioh.edu',
  'ohio': 'ohio.edu',
  'bowling-green': 'bgsu.edu',
  'kent-state': 'kent.edu',
  'akron': 'uakron.edu',
  'toledo': 'utoledo.edu',
  'cleveland-state': 'csuohio.edu',
  'wright-state': 'wright.edu',
  'youngstown': 'ysu.edu',
  'cincinnati': 'uc.edu',
  'dayton': 'udayton.edu',
  'xavier': 'xavier.edu',
  'denison': 'denison.edu',
  'kenyon': 'kenyon.edu',
  'wooster': 'wooster.edu',
  'ohio-wesleyan': 'owu.edu',

  // === MORE MICHIGAN SCHOOLS ===
  'western-michigan': 'wmich.edu',
  'eastern-michigan': 'emich.edu',
  'central-michigan': 'cmich.edu',
  'oakland-mi': 'oakland.edu',
  'wayne-state': 'wayne.edu',
  'grand-valley': 'gvsu.edu',
  'ferris': 'ferris.edu',
  'northern-michigan': 'nmu.edu',
  'saginaw-valley': 'svsu.edu',
  'lake-superior': 'lssu.edu',
  'michigan-tech': 'mtu.edu',
  'hope': 'hope.edu',
  'calvin': 'calvin.edu',
  'kalamazoo': 'kzoo.edu',
  'albion': 'albion.edu',
  'alma': 'alma.edu',

  // === MORE ILLINOIS SCHOOLS ===
  'uic': 'uic.edu',
  'northern-illinois': 'niu.edu',
  'southern-illinois': 'siu.edu',
  'illinois-state': 'ilstu.edu',
  'western-illinois': 'wiu.edu',
  'eastern-illinois': 'eiu.edu',
  'bradley': 'bradley.edu',
  'knox': 'knox.edu',
  'lake-forest': 'lakeforest.edu',
  'wheaton-il': 'wheaton.edu',
  'illinois-wesleyan': 'iwu.edu',
  'augustana-il': 'augustana.edu',

  // === MORE INDIANA SCHOOLS ===
  'ball-state': 'bsu.edu',
  'indiana-state': 'indstate.edu',
  'valparaiso': 'valpo.edu',
  'butler': 'butler.edu',
  'depauw': 'depauw.edu',
  'evansville': 'evansville.edu',
  'wabash': 'wabash.edu',
  'iupui': 'iupui.edu',

  // === MORE WISCONSIN SCHOOLS ===
  'uw-milwaukee': 'uwm.edu',
  'uw-green-bay': 'uwgb.edu',
  'uw-la-crosse': 'uwlax.edu',
  'uw-eau-claire': 'uwec.edu',
  'uw-oshkosh': 'uwosh.edu',
  'uw-whitewater': 'uww.edu',
  'uw-stout': 'uwstout.edu',
  'uw-platteville': 'uwplatt.edu',
  'uw-stevens-point': 'uwsp.edu',
  'uw-river-falls': 'uwrf.edu',
  'uw-parkside': 'uwp.edu',
  'uw-superior': 'uwsuper.edu',
  'lawrence': 'lawrence.edu',
  'beloit': 'beloit.edu',
  'ripon': 'ripon.edu',

  // === MORE MINNESOTA SCHOOLS ===
  'umn-duluth': 'd.umn.edu',
  'umn-morris': 'morris.umn.edu',
  'st-olaf': 'stolaf.edu',
  'gustavus': 'gustavus.edu',
  'st-thomas': 'stthomas.edu',
  'augsburg': 'augsburg.edu',
  'hamline': 'hamline.edu',
  'bethel-mn': 'bethel.edu',
  'concordia-mn': 'cord.edu',
  'st-johns': 'csbsju.edu',
  'winona-state': 'winona.edu',
  'mankato': 'mnsu.edu',
  'st-cloud': 'stcloudstate.edu',
  'bemidji': 'bemidjistate.edu',
  'moorhead': 'mnstate.edu',

  // === MORE IOWA SCHOOLS ===
  'iowa-state': 'iastate.edu',
  'uni': 'uni.edu',
  'drake': 'drake.edu',
  'coe': 'coe.edu',
  'cornell-ia': 'cornellcollege.edu',
  'luther': 'luther.edu',
  'wartburg': 'wartburg.edu',
  'simpson': 'simpson.edu',
  'central-ia': 'central.edu',

  // === MORE MASSACHUSETTS SCHOOLS ===
  'umass-lowell': 'uml.edu',
  'umass-dartmouth': 'umassd.edu',
  'umass-boston': 'umb.edu',
  'bridgewater': 'bridgew.edu',
  'framingham': 'framingham.edu',
  'fitchburg': 'fitchburgstate.edu',
  'salem-state': 'salemstate.edu',
  'westfield': 'westfield.ma.edu',
  'merrimack': 'merrimack.edu',
  'assumption': 'assumption.edu',
  'stonehill': 'stonehill.edu',
  'emmanuel': 'emmanuel.edu',
  'simmons': 'simmons.edu',
  'wheaton-ma': 'wheatoncollege.edu',
  'holy-cross': 'holycross.edu',
  'mount-holyoke': 'mtholyoke.edu',
  'hampshire': 'hampshire.edu',

  // === MORE CONNECTICUT SCHOOLS ===
  'uconn-stamford': 'stamford.uconn.edu',
  'southern-ct': 'southernct.edu',
  'central-ct': 'ccsu.edu',
  'eastern-ct': 'easternct.edu',
  'western-ct': 'wcsu.edu',
  'connecticut-college': 'conncoll.edu',

  // === MORE VIRGINIA SCHOOLS ===
  'jmu': 'jmu.edu',
  'gmu': 'gmu.edu',
  'odu': 'odu.edu',
  'radford': 'radford.edu',
  'longwood': 'longwood.edu',
  'christopher-newport': 'cnu.edu',
  'mary-washington': 'umw.edu',
  'richmond': 'richmond.edu',
  'washington-lee': 'wlu.edu',
  'hampton-sydney': 'hsc.edu',
  'randolph-macon': 'rmc.edu',
  'roanoke': 'roanoke.edu',
  'sweet-briar': 'sbc.edu',
  'lynchburg': 'lynchburg.edu',
  'liberty': 'liberty.edu',
  'regent': 'regent.edu',

  // === MORE NORTH CAROLINA SCHOOLS ===
  'nc-state': 'ncsu.edu',
  'uncc': 'charlotte.edu',
  'uncg': 'uncg.edu',
  'uncw': 'uncw.edu',
  'unca': 'unca.edu',
  'ecu': 'ecu.edu',
  'app-state': 'appstate.edu',
  'wcu': 'wcu.edu',
  'uncpembroke': 'uncp.edu',
  'fayetteville': 'uncfsu.edu',
  'winston-salem': 'wssu.edu',
  'elizabeth-city': 'ecsu.edu',

  // === MORE GEORGIA SCHOOLS ===
  'georgia-state': 'gsu.edu',
  'georgia-southern': 'georgiasouthern.edu',
  'kennesaw': 'kennesaw.edu',
  'augusta': 'augusta.edu',
  'valdosta': 'valdosta.edu',
  'west-georgia': 'westga.edu',
  'north-georgia': 'ung.edu',
  'columbus-state': 'columbusstate.edu',
  'mercer': 'mercer.edu',
  'oglethorpe': 'oglethorpe.edu',
  'agnes-scott': 'agnesscott.edu',
  'berry': 'berry.edu',

  // === MORE SOUTH CAROLINA SCHOOLS ===
  'charleston': 'cofc.edu',
  'coastal-carolina': 'coastal.edu',
  'winthrop': 'winthrop.edu',
  'citadel': 'citadel.edu',
  'presbyterian': 'presby.edu',
  'wofford': 'wofford.edu',

  // === MORE TENNESSEE SCHOOLS ===
  'memphis': 'memphis.edu',
  'mtsu': 'mtsu.edu',
  'etsu': 'etsu.edu',
  'tntech': 'tntech.edu',
  'austin-peay': 'apsu.edu',
  'uts': 'utsouthern.edu',
  'belmont': 'belmont.edu',
  'lipscomb': 'lipscomb.edu',
  'milligan': 'milligan.edu',
  'lee': 'leeuniversity.edu',
  'carson-newman': 'cn.edu',
  'union-tn': 'uu.edu',

  // === MORE KENTUCKY SCHOOLS ===
  'louisville': 'louisville.edu',
  'wku': 'wku.edu',
  'eku': 'eku.edu',
  'nku': 'nku.edu',
  'murray': 'murraystate.edu',
  'morehead': 'moreheadstate.edu',
  'transylvania': 'transy.edu',
  'berea': 'berea.edu',
  'bellarmine': 'bellarmine.edu',

  // === MORE ALABAMA SCHOOLS ===
  'uab': 'uab.edu',
  'uah': 'uah.edu',
  'usa': 'southalabama.edu',
  'jsu': 'jsu.edu',
  'una': 'una.edu',
  'troy': 'troy.edu',
  'montevallo': 'montevallo.edu',
  'west-alabama': 'uwa.edu',
  'alabama-am': 'aamu.edu',
  'alabama-state': 'alasu.edu',
  'tuskegee': 'tuskegee.edu',
  'samford': 'samford.edu',
  'birmingham-southern': 'bsc.edu',

  // === MORE MISSISSIPPI SCHOOLS ===
  'southern-miss': 'usm.edu',
  'jackson-state': 'jsums.edu',
  'alcorn': 'alcorn.edu',
  'delta-state': 'deltastate.edu',
  'millsaps': 'millsaps.edu',

  // === MORE LOUISIANA SCHOOLS ===
  'louisiana-tech': 'latech.edu',
  'ull': 'louisiana.edu',
  'ulm': 'ulm.edu',
  'mcneese': 'mcneese.edu',
  'nicholls': 'nicholls.edu',
  'northwestern-la': 'nsula.edu',
  'southeastern-la': 'southeastern.edu',
  'southern-la': 'subr.edu',
  'grambling': 'gram.edu',
  'loyola-nola': 'loyno.edu',
  'xavier-la': 'xula.edu',

  // === MORE ARKANSAS SCHOOLS ===
  'arkansas-state': 'astate.edu',
  'uca': 'uca.edu',
  'ualr': 'ualr.edu',
  'hendrix': 'hendrix.edu',
  'harding': 'harding.edu',
  'lyon': 'lyon.edu',
  'ouachita': 'obu.edu',

  // === MORE OKLAHOMA SCHOOLS ===
  'osu-ok': 'okstate.edu',
  'uco': 'uco.edu',
  'cameron': 'cameron.edu',
  'swosu': 'swosu.edu',
  'nwosu': 'nwosu.edu',
  'langston': 'langston.edu',
  'oral-roberts': 'oru.edu',
  'ocu': 'okcu.edu',

  // === MORE KANSAS SCHOOLS ===
  'kansas-state': 'k-state.edu',
  'wichita': 'wichita.edu',
  'emporia': 'emporia.edu',
  'pittsburg': 'pittstate.edu',
  'fhsu': 'fhsu.edu',
  'washburn': 'washburn.edu',
  'baker': 'bakeru.edu',
  'friends': 'friends.edu',

  // === MORE NEBRASKA SCHOOLS ===
  'uno': 'unomaha.edu',
  'unk': 'unk.edu',
  'wayne-state-ne': 'wsc.edu',
  'peru-state': 'peru.edu',
  'chadron': 'csc.edu',
  'nebraska-wesleyan': 'nebrwesleyan.edu',
  'hastings': 'hastings.edu',
  'doane': 'doane.edu',
  'concordia-ne': 'cune.edu',

  // === MORE NORTH DAKOTA SCHOOLS ===
  'und': 'und.edu',
  'dickinson-nd': 'dickinsonstate.edu',
  'mayville': 'mayvillestate.edu',
  'minot': 'minotstateu.edu',
  'valley-city': 'vcsu.edu',

  // === MORE SOUTH DAKOTA SCHOOLS ===
  'usd-sd': 'usd.edu',
  'sdsmt': 'sdsmt.edu',
  'northern-sd': 'northern.edu',
  'bhsu': 'bhsu.edu',
  'dsu-sd': 'dsu.edu',
  'augustana-sd': 'augie.edu',

  // === MORE MONTANA SCHOOLS ===
  'montana-state': 'montana.edu',
  'montana-tech': 'mtech.edu',
  'msub': 'msubillings.edu',
  'msun': 'msun.edu',
  'carroll': 'carroll.edu',
  'rocky': 'rocky.edu',

  // === MORE WYOMING SCHOOLS ===
  'casper': 'caspercollege.edu',

  // === MORE IDAHO SCHOOLS ===
  'idaho-state': 'isu.edu',
  'lewis-clark-id': 'lcsc.edu',
  'nwn': 'nnu.edu',
  'byu-idaho': 'byui.edu',
  'ci': 'collegeofidaho.edu',

  // === MORE NEVADA SCHOOLS ===
  'unr': 'unr.edu',
  'nevada-state': 'nsc.edu',

  // === MORE NEW MEXICO SCHOOLS ===
  'enmu': 'enmu.edu',
  'wnmu': 'wnmu.edu',
  'highlands': 'nmhu.edu',
  'nmtech': 'nmt.edu',

  // === MORE ARIZONA SCHOOLS ===
  'nau': 'nau.edu',
  'gcu': 'gcu.edu',
  'embry-riddle-az': 'erau.edu',

  // === MORE HAWAII SCHOOLS ===
  'hpu': 'hpu.edu',
  'chaminade': 'chaminade.edu',

  // === MORE ALASKA SCHOOLS ===
  'uaa': 'uaa.alaska.edu',
  'uas': 'uas.alaska.edu',

  // === MORE NEW JERSEY SCHOOLS ===
  'tcnj': 'tcnj.edu',
  'rowan': 'rowan.edu',
  'montclair': 'montclair.edu',
  'kean': 'kean.edu',
  'william-paterson': 'wpunj.edu',
  'stockton': 'stockton.edu',
  'ramapo': 'ramapo.edu',
  'rider': 'rider.edu',
  'seton-hall': 'shu.edu',
  'monmouth': 'monmouth.edu',
  'fdu': 'fdu.edu',
  'drew': 'drew.edu',

  // === MORE MARYLAND SCHOOLS ===
  'towson': 'towson.edu',
  'umbc': 'umbc.edu',
  'salisbury': 'salisbury.edu',
  'frostburg': 'frostburg.edu',
  'bowie-state': 'bowiestate.edu',
  'coppin': 'coppin.edu',
  'morgan': 'morgan.edu',
  'loyola-md': 'loyola.edu',
  'goucher': 'goucher.edu',
  'hood': 'hood.edu',
  'mcdaniel': 'mcdaniel.edu',
  'washington-md': 'washcoll.edu',
  'st-marys-md': 'smcm.edu',

  // === MORE DC SCHOOLS ===
  'catholic': 'cua.edu',
  'gallaudet': 'gallaudet.edu',
  'udc': 'udc.edu',

  // === MORE DELAWARE SCHOOLS ===
  'dsu-de': 'desu.edu',
  'wesley': 'wesley.edu',
  'wilmington-de': 'wilmu.edu',

  // === MORE RHODE ISLAND SCHOOLS ===
  'ric': 'ric.edu',
  'bryant': 'bryant.edu',
  'roger-williams': 'rwu.edu',
  'salve-regina': 'salve.edu',

  // === MORE NEW HAMPSHIRE SCHOOLS ===
  'plymouth': 'plymouth.edu',
  'keene': 'keene.edu',
  'snhu': 'snhu.edu',
  'st-anselm': 'anselm.edu',
  'colby-sawyer': 'colby-sawyer.edu',
  'new-england': 'nec.edu',
  'franklin-pierce': 'franklinpierce.edu',

  // === MORE VERMONT SCHOOLS ===
  'champlain': 'champlain.edu',
  'norwich': 'norwich.edu',
  'st-michaels': 'smcvt.edu',
  'vermont-state': 'vtc.edu',
  'bennington': 'bennington.edu',

  // === MORE MAINE SCHOOLS ===
  'usm': 'usm.maine.edu',
  'umfk': 'umfk.edu',
  'umpi': 'umpi.edu',
  'uma': 'uma.edu',
  'umm': 'machias.edu',
  'husson': 'husson.edu',
  'une': 'une.edu',
  'thomas': 'thomas.edu',
  'st-josephs-me': 'sjcme.edu',

  // === MORE WASHINGTON STATE SCHOOLS ===
  'western-washington': 'wwu.edu',
  'central-washington': 'cwu.edu',
  'eastern-washington': 'ewu.edu',
  'evergreen': 'evergreen.edu',
  'pacific-lutheran': 'plu.edu',
  'whitman': 'whitman.edu',
  'whitworth': 'whitworth.edu',
  'puget-sound': 'pugetsound.edu',
  'spx': 'stmartin.edu',

  // === MORE OREGON SCHOOLS ===
  'portland-state': 'pdx.edu',
  'southern-oregon': 'sou.edu',
  'eastern-oregon': 'eou.edu',
  'western-oregon': 'wou.edu',
  'willamette': 'willamette.edu',
  'reed': 'reed.edu',
  'lewis-clark': 'lclark.edu',
  'linfield': 'linfield.edu',
  'pacific-or': 'pacificu.edu',
  'george-fox': 'georgefox.edu'
};

// Get official favicon URL using Google's favicon service
const getLogoUrl = (collegeId) => {
  const domain = collegeDomains[collegeId];
  if (!domain) return null;
  // Use Google's favicon service which reliably fetches official favicons
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
};

// Decorative palette for school badge fallbacks (not UI colors)
const badgePalette = [
  '#1e40af', colors.accent.purple, '#db2777', colors.semantic.error, colors.accent.orange,
  '#ca8a04', colors.semantic.success, colors.accent.teal, '#0891b2', '#4f46e5'
];

// School logo component using official favicons
const SchoolLogo = ({ college, size = 32 }) => {
  const [imageError, setImageError] = useState(false);
  const logoUrl = getLogoUrl(college.id);

  // Generate a consistent color based on school name for fallback
  const getColorFromName = (name) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return badgePalette[Math.abs(hash) % badgePalette.length];
  };

  const firstLetter = college.name.charAt(0).toUpperCase();
  const bgColor = getColorFromName(college.name);

  if (imageError || !logoUrl) {
    return (
      <div style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: radius.sm,
        background: bgColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.text.inverse,
        fontWeight: '700',
        fontSize: `${size * 0.5}px`,
        flexShrink: 0
      }}>
        {firstLetter}
      </div>
    );
  }

  return (
    <img
      src={logoUrl}
      alt={`${college.name} logo`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: radius.sm,
        objectFit: 'contain',
        background: colors.surface.white,
        border: `1px solid ${colors.surface.grayDark}`,
        flexShrink: 0
      }}
      onError={() => setImageError(true)}
    />
  );
};

const CollegePicker = ({
  selectedSchools = [],
  onSave,
  onCancel,
  maxSelections = 3
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selected, setSelected] = useState(selectedSchools);

  // Filter colleges based on search query
  const filteredColleges = useMemo(() => {
    if (!searchQuery.trim()) {
      return collegeData;
    }
    const query = searchQuery.toLowerCase();
    return collegeData.filter(college =>
      college.name.toLowerCase().includes(query) ||
      college.state.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Calculate median score of selected schools
  const medianScore = useMemo(() => {
    if (selected.length === 0) return null;
    return calculateMedian(selected.map(s => s.satMath));
  }, [selected]);

  // Toggle college selection
  const toggleCollege = (college) => {
    const isSelected = selected.some(s => s.id === college.id);

    if (isSelected) {
      setSelected(selected.filter(s => s.id !== college.id));
    } else if (selected.length < maxSelections) {
      setSelected([...selected, college]);
    }
  };

  // Remove a selected college
  const removeCollege = (collegeId) => {
    setSelected(selected.filter(s => s.id !== collegeId));
  };

  // Handle save
  const handleSave = () => {
    if (selected.length > 0) {
      onSave(selected);
    }
  };

  const cardStyle = {
    background: colors.surface.white,
    borderRadius: radius.lg,
    border: `1px solid ${colors.surface.grayDark}`,
    padding: '24px',
    marginBottom: '24px',
    maxHeight: '80vh',
    display: 'flex',
    flexDirection: 'column'
  };

  const selectedCollegeStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 16px',
    background: colors.semantic.successLight,
    borderRadius: radius.md,
    marginBottom: '8px',
    border: `1px solid ${colors.semantic.successBg}`
  };

  const collegeItemStyle = (isSelected, isDisabled) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '14px 16px',
    borderRadius: radius.md,
    marginBottom: '6px',
    cursor: isDisabled && !isSelected ? 'not-allowed' : 'pointer',
    background: isSelected ? colors.semantic.infoLight : colors.surface.offWhite,
    border: isSelected ? `2px solid ${colors.semantic.info}` : `1px solid ${colors.surface.grayDark}`,
    opacity: isDisabled && !isSelected ? 0.5 : 1,
    transition: `all ${transitions.fast}`
  });

  return (
    <div style={cardStyle}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '20px'
      }}>
        <div>
          <div style={{ fontSize: '20px', fontWeight: '600', color: colors.text.primary }}>
            Select Your Top {maxSelections} Target Schools
          </div>
          <div style={{ fontSize: '14px', color: colors.text.secondary, marginTop: '4px' }}>
            We'll set your target score based on these schools
          </div>
        </div>
        <button
          onClick={onCancel}
          style={{
            padding: '8px 16px',
            background: 'transparent',
            color: colors.text.secondary,
            border: 'none',
            fontSize: '14px',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          Cancel
        </button>
      </div>

      {/* Search Box */}
      <div style={{ marginBottom: '16px' }}>
        <input
          type="text"
          placeholder="Search schools by name or state..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '14px 16px',
            fontSize: '15px',
            border: `2px solid ${colors.surface.grayDark}`,
            borderRadius: radius.md,
            outline: 'none',
            boxSizing: 'border-box',
            transition: `border-color ${transitions.fast}`
          }}
          onFocus={(e) => e.target.style.borderColor = colors.semantic.info}
          onBlur={(e) => e.target.style.borderColor = colors.surface.grayDark}
        />
      </div>

      {/* Selected Schools Section */}
      {selected.length > 0 && (
        <div style={{ marginBottom: '16px' }}>
          <div style={{
            fontSize: '13px',
            fontWeight: '600',
            color: colors.semantic.success,
            marginBottom: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Selected ({selected.length}/{maxSelections})
          </div>
          {selected.map(college => (
            <div key={college.id} style={selectedCollegeStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <SchoolLogo college={college} size={36} />
                <div>
                  <div style={{ fontWeight: '600', color: colors.text.primary, fontSize: '15px' }}>
                    {college.name}
                  </div>
                  <div style={{ fontSize: '13px', color: colors.semantic.success, fontWeight: '500' }}>
                    {college.satMath} Math
                  </div>
                </div>
              </div>
              <button
                onClick={() => removeCollege(college.id)}
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: radius.full,
                  border: 'none',
                  background: colors.semantic.errorLight,
                  color: colors.semantic.error,
                  fontSize: '18px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '400'
                }}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      {/* College List */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        marginBottom: '16px',
        maxHeight: '300px'
      }}>
        <div style={{
          fontSize: '13px',
          fontWeight: '600',
          color: colors.text.secondary,
          marginBottom: '10px',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          {searchQuery ? `Results (${filteredColleges.length})` : 'All Schools'}
        </div>

        {filteredColleges.length === 0 ? (
          <div style={{
            padding: '24px',
            textAlign: 'center',
            color: colors.text.secondary,
            fontSize: '14px'
          }}>
            No schools found matching "{searchQuery}"
          </div>
        ) : (
          filteredColleges
            .filter(college => !selected.some(s => s.id === college.id))
            .map(college => {
              const isDisabled = selected.length >= maxSelections;
              return (
                <div
                  key={college.id}
                  style={collegeItemStyle(false, isDisabled)}
                  onClick={() => !isDisabled && toggleCollege(college)}
                  onMouseEnter={(e) => {
                    if (!isDisabled) {
                      e.currentTarget.style.background = colors.surface.gray;
                      e.currentTarget.style.borderColor = colors.surface.grayMedium;
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = colors.surface.offWhite;
                    e.currentTarget.style.borderColor = colors.surface.grayDark;
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <SchoolLogo college={college} size={32} />
                    <div>
                      <div style={{ fontWeight: '500', color: colors.text.primary, fontSize: '15px' }}>
                        {college.name}
                      </div>
                      <div style={{ fontSize: '13px', color: colors.text.secondary, marginTop: '2px' }}>
                        {college.state}
                      </div>
                    </div>
                  </div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: colors.semantic.info,
                    background: colors.semantic.infoLight,
                    padding: '6px 12px',
                    borderRadius: radius.sm
                  }}>
                    {college.satMath}
                  </div>
                </div>
              );
            })
        )}
      </div>

      {/* Footer with Median Score and Save */}
      <div style={{
        borderTop: `1px solid ${colors.surface.grayDark}`,
        paddingTop: '16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          {medianScore ? (
            <>
              <div style={{ fontSize: '13px', color: colors.text.secondary }}>
                Your target score
              </div>
              <div style={{ fontSize: '28px', fontWeight: '700', color: colors.text.primary }}>
                {medianScore}
                <span style={{ fontSize: '14px', fontWeight: '500', color: colors.text.secondary, marginLeft: '6px' }}>
                  Math
                </span>
              </div>
            </>
          ) : (
            <div style={{ fontSize: '14px', color: colors.text.muted }}>
              Select {maxSelections} schools to set your target
            </div>
          )}
        </div>
        <button
          onClick={handleSave}
          disabled={selected.length === 0}
          style={{
            padding: '12px 28px',
            background: selected.length > 0 ? colors.text.primary : colors.surface.grayMedium,
            color: colors.text.inverse,
            border: 'none',
            borderRadius: radius.md,
            fontSize: '15px',
            fontWeight: '600',
            cursor: selected.length > 0 ? 'pointer' : 'not-allowed',
            transition: `background ${transitions.fast}`
          }}
          onMouseEnter={(e) => {
            if (selected.length > 0) e.target.style.background = colors.text.secondary;
          }}
          onMouseLeave={(e) => {
            if (selected.length > 0) e.target.style.background = colors.text.primary;
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CollegePicker;
