// Comprehensive list of 200+ US colleges with median SAT Math scores
// Data sourced from College Board, PrepScholar, and US News (2023-2024)
// Scores represent the 50th percentile (median) for admitted students
// Logos provided via Clearbit Logo API

export const collegeData = [
  // === ELITE (770-800) ===
  { id: 'mit', name: 'Massachusetts Institute of Technology', satMath: 790, state: 'MA', logo: 'https://logo.clearbit.com/mit.edu' },
  { id: 'caltech', name: 'California Institute of Technology', satMath: 795, state: 'CA', logo: 'https://logo.clearbit.com/caltech.edu' },
  { id: 'carnegie-mellon', name: 'Carnegie Mellon University', satMath: 780, state: 'PA', logo: 'https://logo.clearbit.com/cmu.edu' },
  { id: 'harvey-mudd', name: 'Harvey Mudd College', satMath: 790, state: 'CA', logo: 'https://logo.clearbit.com/hmc.edu' },
  { id: 'princeton', name: 'Princeton University', satMath: 775, state: 'NJ', logo: 'https://logo.clearbit.com/princeton.edu' },
  { id: 'stanford', name: 'Stanford University', satMath: 775, state: 'CA', logo: 'https://logo.clearbit.com/stanford.edu' },
  { id: 'harvard', name: 'Harvard University', satMath: 770, state: 'MA', logo: 'https://logo.clearbit.com/harvard.edu' },
  { id: 'yale', name: 'Yale University', satMath: 770, state: 'CT', logo: 'https://logo.clearbit.com/yale.edu' },
  { id: 'columbia', name: 'Columbia University', satMath: 770, state: 'NY', logo: 'https://logo.clearbit.com/columbia.edu' },
  { id: 'uchicago', name: 'University of Chicago', satMath: 775, state: 'IL', logo: 'https://logo.clearbit.com/uchicago.edu' },
  { id: 'duke', name: 'Duke University', satMath: 770, state: 'NC', logo: 'https://logo.clearbit.com/duke.edu' },
  { id: 'upenn', name: 'University of Pennsylvania', satMath: 770, state: 'PA', logo: 'https://logo.clearbit.com/upenn.edu' },
  { id: 'rice', name: 'Rice University', satMath: 775, state: 'TX', logo: 'https://logo.clearbit.com/rice.edu' },
  { id: 'jhu', name: 'Johns Hopkins University', satMath: 770, state: 'MD', logo: 'https://logo.clearbit.com/jhu.edu' },
  { id: 'northwestern', name: 'Northwestern University', satMath: 770, state: 'IL', logo: 'https://logo.clearbit.com/northwestern.edu' },

  // === HIGHLY SELECTIVE (740-769) ===
  { id: 'brown', name: 'Brown University', satMath: 760, state: 'RI', logo: 'https://logo.clearbit.com/brown.edu' },
  { id: 'dartmouth', name: 'Dartmouth College', satMath: 760, state: 'NH', logo: 'https://logo.clearbit.com/dartmouth.edu' },
  { id: 'cornell', name: 'Cornell University', satMath: 765, state: 'NY', logo: 'https://logo.clearbit.com/cornell.edu' },
  { id: 'vanderbilt', name: 'Vanderbilt University', satMath: 760, state: 'TN', logo: 'https://logo.clearbit.com/vanderbilt.edu' },
  { id: 'notre-dame', name: 'University of Notre Dame', satMath: 755, state: 'IN', logo: 'https://logo.clearbit.com/nd.edu' },
  { id: 'washu', name: 'Washington University in St. Louis', satMath: 765, state: 'MO', logo: 'https://logo.clearbit.com/wustl.edu' },
  { id: 'georgetown', name: 'Georgetown University', satMath: 750, state: 'DC', logo: 'https://logo.clearbit.com/georgetown.edu' },
  { id: 'uc-berkeley', name: 'UC Berkeley', satMath: 760, state: 'CA', logo: 'https://logo.clearbit.com/berkeley.edu' },
  { id: 'ucla', name: 'UCLA', satMath: 750, state: 'CA', logo: 'https://logo.clearbit.com/ucla.edu' },
  { id: 'usc', name: 'University of Southern California', satMath: 755, state: 'CA', logo: 'https://logo.clearbit.com/usc.edu' },
  { id: 'umich', name: 'University of Michigan', satMath: 755, state: 'MI', logo: 'https://logo.clearbit.com/umich.edu' },
  { id: 'uva', name: 'University of Virginia', satMath: 745, state: 'VA', logo: 'https://logo.clearbit.com/virginia.edu' },
  { id: 'georgia-tech', name: 'Georgia Institute of Technology', satMath: 760, state: 'GA', logo: 'https://logo.clearbit.com/gatech.edu' },
  { id: 'nyu', name: 'New York University', satMath: 745, state: 'NY', logo: 'https://logo.clearbit.com/nyu.edu' },
  { id: 'tufts', name: 'Tufts University', satMath: 755, state: 'MA', logo: 'https://logo.clearbit.com/tufts.edu' },
  { id: 'boston-college', name: 'Boston College', satMath: 745, state: 'MA', logo: 'https://logo.clearbit.com/bc.edu' },
  { id: 'emory', name: 'Emory University', satMath: 750, state: 'GA', logo: 'https://logo.clearbit.com/emory.edu' },
  { id: 'unc', name: 'UNC Chapel Hill', satMath: 740, state: 'NC', logo: 'https://logo.clearbit.com/unc.edu' },
  { id: 'wake-forest', name: 'Wake Forest University', satMath: 740, state: 'NC', logo: 'https://logo.clearbit.com/wfu.edu' },
  { id: 'william-mary', name: 'William & Mary', satMath: 740, state: 'VA', logo: 'https://logo.clearbit.com/wm.edu' },

  // === SELECTIVE (700-739) ===
  { id: 'boston-u', name: 'Boston University', satMath: 735, state: 'MA', logo: 'https://logo.clearbit.com/bu.edu' },
  { id: 'ucd', name: 'UC Davis', satMath: 720, state: 'CA', logo: 'https://logo.clearbit.com/ucdavis.edu' },
  { id: 'ucsd', name: 'UC San Diego', satMath: 735, state: 'CA', logo: 'https://logo.clearbit.com/ucsd.edu' },
  { id: 'ucsb', name: 'UC Santa Barbara', satMath: 720, state: 'CA', logo: 'https://logo.clearbit.com/ucsb.edu' },
  { id: 'uci', name: 'UC Irvine', satMath: 720, state: 'CA', logo: 'https://logo.clearbit.com/uci.edu' },
  { id: 'ucsc', name: 'UC Santa Cruz', satMath: 700, state: 'CA', logo: 'https://logo.clearbit.com/ucsc.edu' },
  { id: 'ucr', name: 'UC Riverside', satMath: 690, state: 'CA', logo: 'https://logo.clearbit.com/ucr.edu' },
  { id: 'case-western', name: 'Case Western Reserve University', satMath: 740, state: 'OH', logo: 'https://logo.clearbit.com/case.edu' },
  { id: 'tulane', name: 'Tulane University', satMath: 730, state: 'LA', logo: 'https://logo.clearbit.com/tulane.edu' },
  { id: 'northeastern', name: 'Northeastern University', satMath: 740, state: 'MA', logo: 'https://logo.clearbit.com/northeastern.edu' },
  { id: 'brandeis', name: 'Brandeis University', satMath: 735, state: 'MA', logo: 'https://logo.clearbit.com/brandeis.edu' },
  { id: 'lehigh', name: 'Lehigh University', satMath: 730, state: 'PA', logo: 'https://logo.clearbit.com/lehigh.edu' },
  { id: 'villanova', name: 'Villanova University', satMath: 720, state: 'PA', logo: 'https://logo.clearbit.com/villanova.edu' },
  { id: 'rochester', name: 'University of Rochester', satMath: 740, state: 'NY', logo: 'https://logo.clearbit.com/rochester.edu' },
  { id: 'rpi', name: 'Rensselaer Polytechnic Institute', satMath: 745, state: 'NY', logo: 'https://logo.clearbit.com/rpi.edu' },
  { id: 'stevens', name: 'Stevens Institute of Technology', satMath: 740, state: 'NJ', logo: 'https://logo.clearbit.com/stevens.edu' },
  { id: 'virginia-tech', name: 'Virginia Tech', satMath: 720, state: 'VA', logo: 'https://logo.clearbit.com/vt.edu' },
  { id: 'purdue', name: 'Purdue University', satMath: 720, state: 'IN', logo: 'https://logo.clearbit.com/purdue.edu' },
  { id: 'uiuc', name: 'University of Illinois Urbana-Champaign', satMath: 735, state: 'IL', logo: 'https://logo.clearbit.com/illinois.edu' },
  { id: 'uw-madison', name: 'University of Wisconsin-Madison', satMath: 720, state: 'WI', logo: 'https://logo.clearbit.com/wisc.edu' },
  { id: 'psu', name: 'Penn State University', satMath: 700, state: 'PA', logo: 'https://logo.clearbit.com/psu.edu' },
  { id: 'osu', name: 'Ohio State University', satMath: 700, state: 'OH', logo: 'https://logo.clearbit.com/osu.edu' },
  { id: 'uf', name: 'University of Florida', satMath: 710, state: 'FL', logo: 'https://logo.clearbit.com/ufl.edu' },
  { id: 'umd', name: 'University of Maryland', satMath: 720, state: 'MD', logo: 'https://logo.clearbit.com/umd.edu' },
  { id: 'uw', name: 'University of Washington', satMath: 720, state: 'WA', logo: 'https://logo.clearbit.com/washington.edu' },
  { id: 'ut-austin', name: 'University of Texas at Austin', satMath: 715, state: 'TX', logo: 'https://logo.clearbit.com/utexas.edu' },
  { id: 'texas-am', name: 'Texas A&M University', satMath: 700, state: 'TX', logo: 'https://logo.clearbit.com/tamu.edu' },
  { id: 'miami', name: 'University of Miami', satMath: 710, state: 'FL', logo: 'https://logo.clearbit.com/miami.edu' },
  { id: 'smu', name: 'Southern Methodist University', satMath: 715, state: 'TX', logo: 'https://logo.clearbit.com/smu.edu' },
  { id: 'tcu', name: 'Texas Christian University', satMath: 700, state: 'TX', logo: 'https://logo.clearbit.com/tcu.edu' },

  // === COMPETITIVE (650-699) ===
  { id: 'indiana', name: 'Indiana University Bloomington', satMath: 680, state: 'IN', logo: 'https://logo.clearbit.com/indiana.edu' },
  { id: 'msu', name: 'Michigan State University', satMath: 680, state: 'MI', logo: 'https://logo.clearbit.com/msu.edu' },
  { id: 'umn', name: 'University of Minnesota', satMath: 690, state: 'MN', logo: 'https://logo.clearbit.com/umn.edu' },
  { id: 'iowa', name: 'University of Iowa', satMath: 670, state: 'IA', logo: 'https://logo.clearbit.com/uiowa.edu' },
  { id: 'colorado', name: 'University of Colorado Boulder', satMath: 680, state: 'CO', logo: 'https://logo.clearbit.com/colorado.edu' },
  { id: 'rutgers', name: 'Rutgers University', satMath: 690, state: 'NJ', logo: 'https://logo.clearbit.com/rutgers.edu' },
  { id: 'uconn', name: 'University of Connecticut', satMath: 690, state: 'CT', logo: 'https://logo.clearbit.com/uconn.edu' },
  { id: 'vcu', name: 'Virginia Commonwealth University', satMath: 650, state: 'VA', logo: 'https://logo.clearbit.com/vcu.edu' },
  { id: 'clemson', name: 'Clemson University', satMath: 680, state: 'SC', logo: 'https://logo.clearbit.com/clemson.edu' },
  { id: 'syracuse', name: 'Syracuse University', satMath: 680, state: 'NY', logo: 'https://logo.clearbit.com/syr.edu' },
  { id: 'pitt', name: 'University of Pittsburgh', satMath: 680, state: 'PA', logo: 'https://logo.clearbit.com/pitt.edu' },
  { id: 'temple', name: 'Temple University', satMath: 660, state: 'PA', logo: 'https://logo.clearbit.com/temple.edu' },
  { id: 'drexel', name: 'Drexel University', satMath: 680, state: 'PA', logo: 'https://logo.clearbit.com/drexel.edu' },
  { id: 'fordham', name: 'Fordham University', satMath: 690, state: 'NY', logo: 'https://logo.clearbit.com/fordham.edu' },
  { id: 'gwu', name: 'George Washington University', satMath: 700, state: 'DC', logo: 'https://logo.clearbit.com/gwu.edu' },
  { id: 'american', name: 'American University', satMath: 680, state: 'DC', logo: 'https://logo.clearbit.com/american.edu' },
  { id: 'auburn', name: 'Auburn University', satMath: 660, state: 'AL', logo: 'https://logo.clearbit.com/auburn.edu' },
  { id: 'alabama', name: 'University of Alabama', satMath: 650, state: 'AL', logo: 'https://logo.clearbit.com/ua.edu' },
  { id: 'lsu', name: 'Louisiana State University', satMath: 650, state: 'LA', logo: 'https://logo.clearbit.com/lsu.edu' },
  { id: 'arkansas', name: 'University of Arkansas', satMath: 650, state: 'AR', logo: 'https://logo.clearbit.com/uark.edu' },
  { id: 'missouri', name: 'University of Missouri', satMath: 660, state: 'MO', logo: 'https://logo.clearbit.com/missouri.edu' },
  { id: 'kansas', name: 'University of Kansas', satMath: 660, state: 'KS', logo: 'https://logo.clearbit.com/ku.edu' },
  { id: 'nebraska', name: 'University of Nebraska', satMath: 650, state: 'NE', logo: 'https://logo.clearbit.com/unl.edu' },
  { id: 'oklahoma', name: 'University of Oklahoma', satMath: 660, state: 'OK', logo: 'https://logo.clearbit.com/ou.edu' },
  { id: 'tennessee', name: 'University of Tennessee', satMath: 660, state: 'TN', logo: 'https://logo.clearbit.com/utk.edu' },
  { id: 'kentucky', name: 'University of Kentucky', satMath: 650, state: 'KY', logo: 'https://logo.clearbit.com/uky.edu' },
  { id: 'south-carolina', name: 'University of South Carolina', satMath: 660, state: 'SC', logo: 'https://logo.clearbit.com/sc.edu' },
  { id: 'georgia', name: 'University of Georgia', satMath: 680, state: 'GA', logo: 'https://logo.clearbit.com/uga.edu' },
  { id: 'fsu', name: 'Florida State University', satMath: 670, state: 'FL', logo: 'https://logo.clearbit.com/fsu.edu' },
  { id: 'ucf', name: 'University of Central Florida', satMath: 660, state: 'FL', logo: 'https://logo.clearbit.com/ucf.edu' },
  { id: 'usf', name: 'University of South Florida', satMath: 650, state: 'FL', logo: 'https://logo.clearbit.com/usf.edu' },
  { id: 'fiu', name: 'Florida International University', satMath: 640, state: 'FL', logo: 'https://logo.clearbit.com/fiu.edu' },

  // === ACCESSIBLE (550-649) ===
  { id: 'asu', name: 'Arizona State University', satMath: 620, state: 'AZ', logo: 'https://logo.clearbit.com/asu.edu' },
  { id: 'arizona', name: 'University of Arizona', satMath: 620, state: 'AZ', logo: 'https://logo.clearbit.com/arizona.edu' },
  { id: 'unlv', name: 'University of Nevada Las Vegas', satMath: 580, state: 'NV', logo: 'https://logo.clearbit.com/unlv.edu' },
  { id: 'oregon', name: 'University of Oregon', satMath: 620, state: 'OR', logo: 'https://logo.clearbit.com/uoregon.edu' },
  { id: 'oregon-state', name: 'Oregon State University', satMath: 610, state: 'OR', logo: 'https://logo.clearbit.com/oregonstate.edu' },
  { id: 'wsu', name: 'Washington State University', satMath: 600, state: 'WA', logo: 'https://logo.clearbit.com/wsu.edu' },
  { id: 'utsa', name: 'UT San Antonio', satMath: 590, state: 'TX', logo: 'https://logo.clearbit.com/utsa.edu' },
  { id: 'uta', name: 'UT Arlington', satMath: 600, state: 'TX', logo: 'https://logo.clearbit.com/uta.edu' },
  { id: 'utd', name: 'UT Dallas', satMath: 680, state: 'TX', logo: 'https://logo.clearbit.com/utdallas.edu' },
  { id: 'uh', name: 'University of Houston', satMath: 620, state: 'TX', logo: 'https://logo.clearbit.com/uh.edu' },
  { id: 'txstate', name: 'Texas State University', satMath: 580, state: 'TX', logo: 'https://logo.clearbit.com/txstate.edu' },
  { id: 'ttu', name: 'Texas Tech University', satMath: 600, state: 'TX', logo: 'https://logo.clearbit.com/ttu.edu' },
  { id: 'sdsu', name: 'San Diego State University', satMath: 620, state: 'CA', logo: 'https://logo.clearbit.com/sdsu.edu' },
  { id: 'sjsu', name: 'San Jose State University', satMath: 610, state: 'CA', logo: 'https://logo.clearbit.com/sjsu.edu' },
  { id: 'fresno-state', name: 'Fresno State University', satMath: 570, state: 'CA', logo: 'https://logo.clearbit.com/csufresno.edu' },
  { id: 'csulb', name: 'Cal State Long Beach', satMath: 590, state: 'CA', logo: 'https://logo.clearbit.com/csulb.edu' },
  { id: 'csuf', name: 'Cal State Fullerton', satMath: 580, state: 'CA', logo: 'https://logo.clearbit.com/fullerton.edu' },
  { id: 'csun', name: 'Cal State Northridge', satMath: 560, state: 'CA', logo: 'https://logo.clearbit.com/csun.edu' },
  { id: 'cpp', name: 'Cal Poly Pomona', satMath: 610, state: 'CA', logo: 'https://logo.clearbit.com/cpp.edu' },
  { id: 'cpslo', name: 'Cal Poly San Luis Obispo', satMath: 680, state: 'CA', logo: 'https://logo.clearbit.com/calpoly.edu' },
  { id: 'unm', name: 'University of New Mexico', satMath: 580, state: 'NM', logo: 'https://logo.clearbit.com/unm.edu' },
  { id: 'nmsu', name: 'New Mexico State University', satMath: 560, state: 'NM', logo: 'https://logo.clearbit.com/nmsu.edu' },
  { id: 'utah', name: 'University of Utah', satMath: 630, state: 'UT', logo: 'https://logo.clearbit.com/utah.edu' },
  { id: 'usu', name: 'Utah State University', satMath: 600, state: 'UT', logo: 'https://logo.clearbit.com/usu.edu' },
  { id: 'byu', name: 'Brigham Young University', satMath: 680, state: 'UT', logo: 'https://logo.clearbit.com/byu.edu' },
  { id: 'cu-denver', name: 'CU Denver', satMath: 590, state: 'CO', logo: 'https://logo.clearbit.com/ucdenver.edu' },
  { id: 'colorado-state', name: 'Colorado State University', satMath: 610, state: 'CO', logo: 'https://logo.clearbit.com/colostate.edu' },
  { id: 'wyoming', name: 'University of Wyoming', satMath: 580, state: 'WY', logo: 'https://logo.clearbit.com/uwyo.edu' },
  { id: 'montana', name: 'University of Montana', satMath: 580, state: 'MT', logo: 'https://logo.clearbit.com/umt.edu' },
  { id: 'idaho', name: 'University of Idaho', satMath: 580, state: 'ID', logo: 'https://logo.clearbit.com/uidaho.edu' },
  { id: 'boise-state', name: 'Boise State University', satMath: 570, state: 'ID', logo: 'https://logo.clearbit.com/boisestate.edu' },

  // === MORE SELECTIVE LIBERAL ARTS ===
  { id: 'williams', name: 'Williams College', satMath: 760, state: 'MA', logo: 'https://logo.clearbit.com/williams.edu' },
  { id: 'amherst', name: 'Amherst College', satMath: 760, state: 'MA', logo: 'https://logo.clearbit.com/amherst.edu' },
  { id: 'swarthmore', name: 'Swarthmore College', satMath: 760, state: 'PA', logo: 'https://logo.clearbit.com/swarthmore.edu' },
  { id: 'pomona', name: 'Pomona College', satMath: 755, state: 'CA', logo: 'https://logo.clearbit.com/pomona.edu' },
  { id: 'claremont-mckenna', name: 'Claremont McKenna College', satMath: 750, state: 'CA', logo: 'https://logo.clearbit.com/cmc.edu' },
  { id: 'wellesley', name: 'Wellesley College', satMath: 745, state: 'MA', logo: 'https://logo.clearbit.com/wellesley.edu' },
  { id: 'bowdoin', name: 'Bowdoin College', satMath: 745, state: 'ME', logo: 'https://logo.clearbit.com/bowdoin.edu' },
  { id: 'middlebury', name: 'Middlebury College', satMath: 740, state: 'VT', logo: 'https://logo.clearbit.com/middlebury.edu' },
  { id: 'carleton', name: 'Carleton College', satMath: 750, state: 'MN', logo: 'https://logo.clearbit.com/carleton.edu' },
  { id: 'haverford', name: 'Haverford College', satMath: 745, state: 'PA', logo: 'https://logo.clearbit.com/haverford.edu' },
  { id: 'davidson', name: 'Davidson College', satMath: 730, state: 'NC', logo: 'https://logo.clearbit.com/davidson.edu' },
  { id: 'colgate', name: 'Colgate University', satMath: 720, state: 'NY', logo: 'https://logo.clearbit.com/colgate.edu' },
  { id: 'hamilton', name: 'Hamilton College', satMath: 730, state: 'NY', logo: 'https://logo.clearbit.com/hamilton.edu' },
  { id: 'wesleyan', name: 'Wesleyan University', satMath: 740, state: 'CT', logo: 'https://logo.clearbit.com/wesleyan.edu' },
  { id: 'colby', name: 'Colby College', satMath: 730, state: 'ME', logo: 'https://logo.clearbit.com/colby.edu' },
  { id: 'bates', name: 'Bates College', satMath: 720, state: 'ME', logo: 'https://logo.clearbit.com/bates.edu' },
  { id: 'grinnell', name: 'Grinnell College', satMath: 740, state: 'IA', logo: 'https://logo.clearbit.com/grinnell.edu' },
  { id: 'oberlin', name: 'Oberlin College', satMath: 720, state: 'OH', logo: 'https://logo.clearbit.com/oberlin.edu' },
  { id: 'vassar', name: 'Vassar College', satMath: 725, state: 'NY', logo: 'https://logo.clearbit.com/vassar.edu' },
  { id: 'colorado-college', name: 'Colorado College', satMath: 710, state: 'CO', logo: 'https://logo.clearbit.com/coloradocollege.edu' },
  { id: 'macalester', name: 'Macalester College', satMath: 720, state: 'MN', logo: 'https://logo.clearbit.com/macalester.edu' },
  { id: 'smith', name: 'Smith College', satMath: 710, state: 'MA', logo: 'https://logo.clearbit.com/smith.edu' },
  { id: 'bryn-mawr', name: 'Bryn Mawr College', satMath: 715, state: 'PA', logo: 'https://logo.clearbit.com/brynmawr.edu' },
  { id: 'barnard', name: 'Barnard College', satMath: 730, state: 'NY', logo: 'https://logo.clearbit.com/barnard.edu' },
  { id: 'trinity', name: 'Trinity College', satMath: 700, state: 'CT', logo: 'https://logo.clearbit.com/trincoll.edu' },
  { id: 'bucknell', name: 'Bucknell University', satMath: 710, state: 'PA', logo: 'https://logo.clearbit.com/bucknell.edu' },
  { id: 'lafayette', name: 'Lafayette College', satMath: 710, state: 'PA', logo: 'https://logo.clearbit.com/lafayette.edu' },
  { id: 'gettysburg', name: 'Gettysburg College', satMath: 680, state: 'PA', logo: 'https://logo.clearbit.com/gettysburg.edu' },
  { id: 'dickinson', name: 'Dickinson College', satMath: 680, state: 'PA', logo: 'https://logo.clearbit.com/dickinson.edu' },
  { id: 'skidmore', name: 'Skidmore College', satMath: 680, state: 'NY', logo: 'https://logo.clearbit.com/skidmore.edu' },
  { id: 'union', name: 'Union College', satMath: 690, state: 'NY', logo: 'https://logo.clearbit.com/union.edu' },

  // === ART & DESIGN SCHOOLS ===
  { id: 'risd', name: 'Rhode Island School of Design', satMath: 700, state: 'RI', logo: 'https://logo.clearbit.com/risd.edu' },
  { id: 'parsons', name: 'Parsons School of Design', satMath: 650, state: 'NY', logo: 'https://logo.clearbit.com/newschool.edu' },
  { id: 'pratt', name: 'Pratt Institute', satMath: 640, state: 'NY', logo: 'https://logo.clearbit.com/pratt.edu' },
  { id: 'saic', name: 'School of the Art Institute of Chicago', satMath: 630, state: 'IL', logo: 'https://logo.clearbit.com/saic.edu' },
  { id: 'cca', name: 'California College of the Arts', satMath: 620, state: 'CA', logo: 'https://logo.clearbit.com/cca.edu' },
  { id: 'otis', name: 'Otis College of Art and Design', satMath: 600, state: 'CA', logo: 'https://logo.clearbit.com/otis.edu' },
  { id: 'scad', name: 'Savannah College of Art and Design', satMath: 620, state: 'GA', logo: 'https://logo.clearbit.com/scad.edu' },

  // === BUSINESS-FOCUSED ===
  { id: 'babson', name: 'Babson College', satMath: 720, state: 'MA', logo: 'https://logo.clearbit.com/babson.edu' },
  { id: 'bentley', name: 'Bentley University', satMath: 690, state: 'MA', logo: 'https://logo.clearbit.com/bentley.edu' },
  { id: 'indiana-kelley', name: 'Indiana University Kelley School', satMath: 700, state: 'IN', logo: 'https://logo.clearbit.com/indiana.edu' },

  // === ENGINEERING-FOCUSED ===
  { id: 'rose-hulman', name: 'Rose-Hulman Institute of Technology', satMath: 750, state: 'IN', logo: 'https://logo.clearbit.com/rose-hulman.edu' },
  { id: 'wpi', name: 'Worcester Polytechnic Institute', satMath: 740, state: 'MA', logo: 'https://logo.clearbit.com/wpi.edu' },
  { id: 'rit', name: 'Rochester Institute of Technology', satMath: 700, state: 'NY', logo: 'https://logo.clearbit.com/rit.edu' },
  { id: 'njit', name: 'New Jersey Institute of Technology', satMath: 680, state: 'NJ', logo: 'https://logo.clearbit.com/njit.edu' },
  { id: 'colorado-mines', name: 'Colorado School of Mines', satMath: 730, state: 'CO', logo: 'https://logo.clearbit.com/mines.edu' },
  { id: 'iit', name: 'Illinois Institute of Technology', satMath: 720, state: 'IL', logo: 'https://logo.clearbit.com/iit.edu' },

  // === HISTORICALLY BLACK COLLEGES & UNIVERSITIES ===
  { id: 'howard', name: 'Howard University', satMath: 620, state: 'DC', logo: 'https://logo.clearbit.com/howard.edu' },
  { id: 'spelman', name: 'Spelman College', satMath: 610, state: 'GA', logo: 'https://logo.clearbit.com/spelman.edu' },
  { id: 'morehouse', name: 'Morehouse College', satMath: 600, state: 'GA', logo: 'https://logo.clearbit.com/morehouse.edu' },
  { id: 'hampton', name: 'Hampton University', satMath: 580, state: 'VA', logo: 'https://logo.clearbit.com/hamptonu.edu' },
  { id: 'famu', name: 'Florida A&M University', satMath: 570, state: 'FL', logo: 'https://logo.clearbit.com/famu.edu' },
  { id: 'nc-at', name: 'North Carolina A&T', satMath: 560, state: 'NC', logo: 'https://logo.clearbit.com/ncat.edu' },
  { id: 'prairie-view', name: 'Prairie View A&M University', satMath: 540, state: 'TX', logo: 'https://logo.clearbit.com/pvamu.edu' },

  // === ADDITIONAL STATE UNIVERSITIES ===
  { id: 'umass', name: 'UMass Amherst', satMath: 700, state: 'MA', logo: 'https://logo.clearbit.com/umass.edu' },
  { id: 'uri', name: 'University of Rhode Island', satMath: 620, state: 'RI', logo: 'https://logo.clearbit.com/uri.edu' },
  { id: 'unh', name: 'University of New Hampshire', satMath: 630, state: 'NH', logo: 'https://logo.clearbit.com/unh.edu' },
  { id: 'uvm', name: 'University of Vermont', satMath: 640, state: 'VT', logo: 'https://logo.clearbit.com/uvm.edu' },
  { id: 'maine', name: 'University of Maine', satMath: 590, state: 'ME', logo: 'https://logo.clearbit.com/umaine.edu' },
  { id: 'suny-buffalo', name: 'SUNY Buffalo', satMath: 660, state: 'NY', logo: 'https://logo.clearbit.com/buffalo.edu' },
  { id: 'suny-stony-brook', name: 'Stony Brook University', satMath: 700, state: 'NY', logo: 'https://logo.clearbit.com/stonybrook.edu' },
  { id: 'suny-binghamton', name: 'Binghamton University', satMath: 710, state: 'NY', logo: 'https://logo.clearbit.com/binghamton.edu' },
  { id: 'suny-albany', name: 'SUNY Albany', satMath: 620, state: 'NY', logo: 'https://logo.clearbit.com/albany.edu' },
  { id: 'cuny-hunter', name: 'CUNY Hunter College', satMath: 620, state: 'NY', logo: 'https://logo.clearbit.com/hunter.cuny.edu' },
  { id: 'cuny-baruch', name: 'CUNY Baruch College', satMath: 650, state: 'NY', logo: 'https://logo.clearbit.com/baruch.cuny.edu' },
  { id: 'cuny-ccny', name: 'CUNY City College', satMath: 610, state: 'NY', logo: 'https://logo.clearbit.com/ccny.cuny.edu' },
  { id: 'delaware', name: 'University of Delaware', satMath: 670, state: 'DE', logo: 'https://logo.clearbit.com/udel.edu' },
  { id: 'wvu', name: 'West Virginia University', satMath: 590, state: 'WV', logo: 'https://logo.clearbit.com/wvu.edu' },
  { id: 'hawaii', name: 'University of Hawaii', satMath: 600, state: 'HI', logo: 'https://logo.clearbit.com/hawaii.edu' },
  { id: 'alaska', name: 'University of Alaska Fairbanks', satMath: 580, state: 'AK', logo: 'https://logo.clearbit.com/uaf.edu' },
  { id: 'ndsu', name: 'North Dakota State University', satMath: 600, state: 'ND', logo: 'https://logo.clearbit.com/ndsu.edu' },
  { id: 'sdsu-sd', name: 'South Dakota State University', satMath: 600, state: 'SD', logo: 'https://logo.clearbit.com/sdstate.edu' },
  { id: 'msstate', name: 'Mississippi State University', satMath: 620, state: 'MS', logo: 'https://logo.clearbit.com/msstate.edu' },
  { id: 'olemiss', name: 'University of Mississippi', satMath: 610, state: 'MS', logo: 'https://logo.clearbit.com/olemiss.edu' },

  // === ADDITIONAL PRIVATE UNIVERSITIES ===
  { id: 'loyola-chicago', name: 'Loyola University Chicago', satMath: 680, state: 'IL', logo: 'https://logo.clearbit.com/luc.edu' },
  { id: 'depaul', name: 'DePaul University', satMath: 650, state: 'IL', logo: 'https://logo.clearbit.com/depaul.edu' },
  { id: 'marquette', name: 'Marquette University', satMath: 660, state: 'WI', logo: 'https://logo.clearbit.com/marquette.edu' },
  { id: 'creighton', name: 'Creighton University', satMath: 660, state: 'NE', logo: 'https://logo.clearbit.com/creighton.edu' },
  { id: 'gonzaga', name: 'Gonzaga University', satMath: 670, state: 'WA', logo: 'https://logo.clearbit.com/gonzaga.edu' },
  { id: 'santa-clara', name: 'Santa Clara University', satMath: 710, state: 'CA', logo: 'https://logo.clearbit.com/scu.edu' },
  { id: 'lmu', name: 'Loyola Marymount University', satMath: 680, state: 'CA', logo: 'https://logo.clearbit.com/lmu.edu' },
  { id: 'usd', name: 'University of San Diego', satMath: 680, state: 'CA', logo: 'https://logo.clearbit.com/sandiego.edu' },
  { id: 'pepperdine', name: 'Pepperdine University', satMath: 680, state: 'CA', logo: 'https://logo.clearbit.com/pepperdine.edu' },
  { id: 'san-francisco', name: 'University of San Francisco', satMath: 650, state: 'CA', logo: 'https://logo.clearbit.com/usfca.edu' },
  { id: 'pacific', name: 'University of the Pacific', satMath: 640, state: 'CA', logo: 'https://logo.clearbit.com/pacific.edu' },
  { id: 'seattle', name: 'Seattle University', satMath: 650, state: 'WA', logo: 'https://logo.clearbit.com/seattleu.edu' },
  { id: 'portland', name: 'University of Portland', satMath: 640, state: 'OR', logo: 'https://logo.clearbit.com/up.edu' },
  { id: 'denver', name: 'University of Denver', satMath: 660, state: 'CO', logo: 'https://logo.clearbit.com/du.edu' },
  { id: 'tulsa', name: 'University of Tulsa', satMath: 670, state: 'OK', logo: 'https://logo.clearbit.com/utulsa.edu' },
  { id: 'baylor', name: 'Baylor University', satMath: 680, state: 'TX', logo: 'https://logo.clearbit.com/baylor.edu' },
  { id: 'slu', name: 'Saint Louis University', satMath: 660, state: 'MO', logo: 'https://logo.clearbit.com/slu.edu' },
  { id: 'elon', name: 'Elon University', satMath: 640, state: 'NC', logo: 'https://logo.clearbit.com/elon.edu' },
  { id: 'furman', name: 'Furman University', satMath: 660, state: 'SC', logo: 'https://logo.clearbit.com/furman.edu' },
  { id: 'rhodes', name: 'Rhodes College', satMath: 680, state: 'TN', logo: 'https://logo.clearbit.com/rhodes.edu' },
  { id: 'sewanee', name: 'Sewanee: University of the South', satMath: 650, state: 'TN', logo: 'https://logo.clearbit.com/sewanee.edu' },
  { id: 'centre', name: 'Centre College', satMath: 660, state: 'KY', logo: 'https://logo.clearbit.com/centre.edu' },
  { id: 'rollins', name: 'Rollins College', satMath: 640, state: 'FL', logo: 'https://logo.clearbit.com/rollins.edu' },
  { id: 'stetson', name: 'Stetson University', satMath: 620, state: 'FL', logo: 'https://logo.clearbit.com/stetson.edu' },
  { id: 'hofstra', name: 'Hofstra University', satMath: 640, state: 'NY', logo: 'https://logo.clearbit.com/hofstra.edu' },
  { id: 'adelphi', name: 'Adelphi University', satMath: 610, state: 'NY', logo: 'https://logo.clearbit.com/adelphi.edu' },
  { id: 'pace', name: 'Pace University', satMath: 620, state: 'NY', logo: 'https://logo.clearbit.com/pace.edu' },
  { id: 'quinnipiac', name: 'Quinnipiac University', satMath: 630, state: 'CT', logo: 'https://logo.clearbit.com/quinnipiac.edu' },
  { id: 'fairfield', name: 'Fairfield University', satMath: 660, state: 'CT', logo: 'https://logo.clearbit.com/fairfield.edu' },
  { id: 'providence', name: 'Providence College', satMath: 660, state: 'RI', logo: 'https://logo.clearbit.com/providence.edu' },
  { id: 'marist', name: 'Marist College', satMath: 640, state: 'NY', logo: 'https://logo.clearbit.com/marist.edu' },
  { id: 'siena', name: 'Siena College', satMath: 620, state: 'NY', logo: 'https://logo.clearbit.com/siena.edu' },
  { id: 'iona', name: 'Iona University', satMath: 590, state: 'NY', logo: 'https://logo.clearbit.com/iona.edu' },
  { id: 'shu', name: 'Sacred Heart University', satMath: 610, state: 'CT', logo: 'https://logo.clearbit.com/sacredheart.edu' },
  { id: 'hartford', name: 'University of Hartford', satMath: 590, state: 'CT', logo: 'https://logo.clearbit.com/hartford.edu' },
  { id: 'suffolk', name: 'Suffolk University', satMath: 590, state: 'MA', logo: 'https://logo.clearbit.com/suffolk.edu' },
  { id: 'clark', name: 'Clark University', satMath: 680, state: 'MA', logo: 'https://logo.clearbit.com/clarku.edu' },
  { id: 'worcester', name: 'Worcester State University', satMath: 570, state: 'MA', logo: 'https://logo.clearbit.com/worcester.edu' },

  // === ADDITIONAL COLLEGES - EXPANDING DATABASE ===

  // More Elite/Highly Selective
  { id: 'olin', name: 'Olin College of Engineering', satMath: 785, state: 'MA', logo: 'https://logo.clearbit.com/olin.edu' },
  { id: 'cooper-union', name: 'Cooper Union', satMath: 770, state: 'NY', logo: 'https://logo.clearbit.com/cooper.edu' },
  { id: 'webb', name: 'Webb Institute', satMath: 760, state: 'NY', logo: 'https://logo.clearbit.com/webb.edu' },
  { id: 'uchicago-harris', name: 'University of Chicago', satMath: 775, state: 'IL', logo: 'https://logo.clearbit.com/uchicago.edu' },

  // More UC System
  { id: 'uc-merced', name: 'UC Merced', satMath: 620, state: 'CA', logo: 'https://logo.clearbit.com/ucmerced.edu' },

  // More Cal State System
  { id: 'csu-sacramento', name: 'Sacramento State University', satMath: 560, state: 'CA', logo: 'https://logo.clearbit.com/csus.edu' },
  { id: 'csu-east-bay', name: 'Cal State East Bay', satMath: 550, state: 'CA', logo: 'https://logo.clearbit.com/csueastbay.edu' },
  { id: 'csu-bakersfield', name: 'Cal State Bakersfield', satMath: 530, state: 'CA', logo: 'https://logo.clearbit.com/csub.edu' },
  { id: 'csu-chico', name: 'Chico State University', satMath: 580, state: 'CA', logo: 'https://logo.clearbit.com/csuchico.edu' },
  { id: 'csu-san-marcos', name: 'Cal State San Marcos', satMath: 560, state: 'CA', logo: 'https://logo.clearbit.com/csusm.edu' },
  { id: 'csu-stanislaus', name: 'Cal State Stanislaus', satMath: 530, state: 'CA', logo: 'https://logo.clearbit.com/csustan.edu' },
  { id: 'csu-dominguez-hills', name: 'Cal State Dominguez Hills', satMath: 520, state: 'CA', logo: 'https://logo.clearbit.com/csudh.edu' },
  { id: 'csu-la', name: 'Cal State Los Angeles', satMath: 540, state: 'CA', logo: 'https://logo.clearbit.com/calstatela.edu' },
  { id: 'humboldt', name: 'Cal Poly Humboldt', satMath: 570, state: 'CA', logo: 'https://logo.clearbit.com/humboldt.edu' },
  { id: 'sonoma', name: 'Sonoma State University', satMath: 560, state: 'CA', logo: 'https://logo.clearbit.com/sonoma.edu' },
  { id: 'csu-monterey', name: 'Cal State Monterey Bay', satMath: 550, state: 'CA', logo: 'https://logo.clearbit.com/csumb.edu' },
  { id: 'csu-channel-islands', name: 'Cal State Channel Islands', satMath: 540, state: 'CA', logo: 'https://logo.clearbit.com/csuci.edu' },
  { id: 'san-bernardino', name: 'Cal State San Bernardino', satMath: 520, state: 'CA', logo: 'https://logo.clearbit.com/csusb.edu' },

  // More SUNY System
  { id: 'suny-geneseo', name: 'SUNY Geneseo', satMath: 680, state: 'NY', logo: 'https://logo.clearbit.com/geneseo.edu' },
  { id: 'suny-new-paltz', name: 'SUNY New Paltz', satMath: 620, state: 'NY', logo: 'https://logo.clearbit.com/newpaltz.edu' },
  { id: 'suny-oswego', name: 'SUNY Oswego', satMath: 600, state: 'NY', logo: 'https://logo.clearbit.com/oswego.edu' },
  { id: 'suny-cortland', name: 'SUNY Cortland', satMath: 590, state: 'NY', logo: 'https://logo.clearbit.com/cortland.edu' },
  { id: 'suny-fredonia', name: 'SUNY Fredonia', satMath: 580, state: 'NY', logo: 'https://logo.clearbit.com/fredonia.edu' },
  { id: 'suny-oneonta', name: 'SUNY Oneonta', satMath: 590, state: 'NY', logo: 'https://logo.clearbit.com/oneonta.edu' },
  { id: 'suny-plattsburgh', name: 'SUNY Plattsburgh', satMath: 570, state: 'NY', logo: 'https://logo.clearbit.com/plattsburgh.edu' },
  { id: 'suny-potsdam', name: 'SUNY Potsdam', satMath: 560, state: 'NY', logo: 'https://logo.clearbit.com/potsdam.edu' },
  { id: 'suny-brockport', name: 'SUNY Brockport', satMath: 580, state: 'NY', logo: 'https://logo.clearbit.com/brockport.edu' },
  { id: 'suny-purchase', name: 'SUNY Purchase', satMath: 590, state: 'NY', logo: 'https://logo.clearbit.com/purchase.edu' },

  // More CUNY System
  { id: 'cuny-queens', name: 'CUNY Queens College', satMath: 600, state: 'NY', logo: 'https://logo.clearbit.com/qc.cuny.edu' },
  { id: 'cuny-brooklyn', name: 'CUNY Brooklyn College', satMath: 580, state: 'NY', logo: 'https://logo.clearbit.com/brooklyn.cuny.edu' },
  { id: 'cuny-lehman', name: 'CUNY Lehman College', satMath: 550, state: 'NY', logo: 'https://logo.clearbit.com/lehman.cuny.edu' },
  { id: 'cuny-john-jay', name: 'CUNY John Jay College', satMath: 560, state: 'NY', logo: 'https://logo.clearbit.com/jjay.cuny.edu' },
  { id: 'cuny-york', name: 'CUNY York College', satMath: 530, state: 'NY', logo: 'https://logo.clearbit.com/york.cuny.edu' },
  { id: 'cuny-staten-island', name: 'CUNY College of Staten Island', satMath: 540, state: 'NY', logo: 'https://logo.clearbit.com/csi.cuny.edu' },

  // More Texas Schools
  { id: 'utep', name: 'UT El Paso', satMath: 560, state: 'TX', logo: 'https://logo.clearbit.com/utep.edu' },
  { id: 'utrgv', name: 'UT Rio Grande Valley', satMath: 540, state: 'TX', logo: 'https://logo.clearbit.com/utrgv.edu' },
  { id: 'sam-houston', name: 'Sam Houston State University', satMath: 570, state: 'TX', logo: 'https://logo.clearbit.com/shsu.edu' },
  { id: 'stephen-f-austin', name: 'Stephen F. Austin State University', satMath: 550, state: 'TX', logo: 'https://logo.clearbit.com/sfasu.edu' },
  { id: 'tarleton', name: 'Tarleton State University', satMath: 540, state: 'TX', logo: 'https://logo.clearbit.com/tarleton.edu' },
  { id: 'lamar', name: 'Lamar University', satMath: 530, state: 'TX', logo: 'https://logo.clearbit.com/lamar.edu' },
  { id: 'unt', name: 'University of North Texas', satMath: 600, state: 'TX', logo: 'https://logo.clearbit.com/unt.edu' },
  { id: 'twu', name: 'Texas Woman\'s University', satMath: 550, state: 'TX', logo: 'https://logo.clearbit.com/twu.edu' },
  { id: 'midwestern', name: 'Midwestern State University', satMath: 540, state: 'TX', logo: 'https://logo.clearbit.com/msutexas.edu' },
  { id: 'tamucc', name: 'Texas A&M Corpus Christi', satMath: 560, state: 'TX', logo: 'https://logo.clearbit.com/tamucc.edu' },
  { id: 'tamuk', name: 'Texas A&M Kingsville', satMath: 530, state: 'TX', logo: 'https://logo.clearbit.com/tamuk.edu' },
  { id: 'tamuc', name: 'Texas A&M Commerce', satMath: 540, state: 'TX', logo: 'https://logo.clearbit.com/tamuc.edu' },
  { id: 'wtamu', name: 'West Texas A&M University', satMath: 550, state: 'TX', logo: 'https://logo.clearbit.com/wtamu.edu' },

  // More Florida Schools
  { id: 'fau', name: 'Florida Atlantic University', satMath: 620, state: 'FL', logo: 'https://logo.clearbit.com/fau.edu' },
  { id: 'fgcu', name: 'Florida Gulf Coast University', satMath: 600, state: 'FL', logo: 'https://logo.clearbit.com/fgcu.edu' },
  { id: 'unf', name: 'University of North Florida', satMath: 610, state: 'FL', logo: 'https://logo.clearbit.com/unf.edu' },
  { id: 'uwf', name: 'University of West Florida', satMath: 590, state: 'FL', logo: 'https://logo.clearbit.com/uwf.edu' },
  { id: 'fpu', name: 'Florida Polytechnic University', satMath: 660, state: 'FL', logo: 'https://logo.clearbit.com/floridapoly.edu' },

  // More Pennsylvania Schools
  { id: 'west-chester', name: 'West Chester University', satMath: 600, state: 'PA', logo: 'https://logo.clearbit.com/wcupa.edu' },
  { id: 'millersville', name: 'Millersville University', satMath: 570, state: 'PA', logo: 'https://logo.clearbit.com/millersville.edu' },
  { id: 'kutztown', name: 'Kutztown University', satMath: 550, state: 'PA', logo: 'https://logo.clearbit.com/kutztown.edu' },
  { id: 'shippensburg', name: 'Shippensburg University', satMath: 560, state: 'PA', logo: 'https://logo.clearbit.com/ship.edu' },
  { id: 'bloomsburg', name: 'Bloomsburg University', satMath: 550, state: 'PA', logo: 'https://logo.clearbit.com/bloomu.edu' },
  { id: 'slippery-rock', name: 'Slippery Rock University', satMath: 560, state: 'PA', logo: 'https://logo.clearbit.com/sru.edu' },
  { id: 'iup', name: 'Indiana University of Pennsylvania', satMath: 550, state: 'PA', logo: 'https://logo.clearbit.com/iup.edu' },
  { id: 'clarion', name: 'Clarion University', satMath: 530, state: 'PA', logo: 'https://logo.clearbit.com/clarion.edu' },
  { id: 'edinboro', name: 'PennWest Edinboro', satMath: 520, state: 'PA', logo: 'https://logo.clearbit.com/edinboro.edu' },
  { id: 'lock-haven', name: 'Lock Haven University', satMath: 530, state: 'PA', logo: 'https://logo.clearbit.com/lockhaven.edu' },
  { id: 'mansfield', name: 'Mansfield University', satMath: 520, state: 'PA', logo: 'https://logo.clearbit.com/mansfield.edu' },
  { id: 'east-stroudsburg', name: 'East Stroudsburg University', satMath: 540, state: 'PA', logo: 'https://logo.clearbit.com/esu.edu' },
  { id: 'la-salle', name: 'La Salle University', satMath: 600, state: 'PA', logo: 'https://logo.clearbit.com/lasalle.edu' },
  { id: 'st-josephs', name: 'Saint Joseph\'s University', satMath: 640, state: 'PA', logo: 'https://logo.clearbit.com/sju.edu' },
  { id: 'duquesne', name: 'Duquesne University', satMath: 630, state: 'PA', logo: 'https://logo.clearbit.com/duq.edu' },

  // More Ohio Schools
  { id: 'miami-ohio', name: 'Miami University (Ohio)', satMath: 680, state: 'OH', logo: 'https://logo.clearbit.com/miamioh.edu' },
  { id: 'ohio', name: 'Ohio University', satMath: 620, state: 'OH', logo: 'https://logo.clearbit.com/ohio.edu' },
  { id: 'bowling-green', name: 'Bowling Green State University', satMath: 590, state: 'OH', logo: 'https://logo.clearbit.com/bgsu.edu' },
  { id: 'kent-state', name: 'Kent State University', satMath: 600, state: 'OH', logo: 'https://logo.clearbit.com/kent.edu' },
  { id: 'akron', name: 'University of Akron', satMath: 580, state: 'OH', logo: 'https://logo.clearbit.com/uakron.edu' },
  { id: 'toledo', name: 'University of Toledo', satMath: 590, state: 'OH', logo: 'https://logo.clearbit.com/utoledo.edu' },
  { id: 'cleveland-state', name: 'Cleveland State University', satMath: 580, state: 'OH', logo: 'https://logo.clearbit.com/csuohio.edu' },
  { id: 'wright-state', name: 'Wright State University', satMath: 570, state: 'OH', logo: 'https://logo.clearbit.com/wright.edu' },
  { id: 'youngstown', name: 'Youngstown State University', satMath: 550, state: 'OH', logo: 'https://logo.clearbit.com/ysu.edu' },
  { id: 'cincinnati', name: 'University of Cincinnati', satMath: 660, state: 'OH', logo: 'https://logo.clearbit.com/uc.edu' },
  { id: 'dayton', name: 'University of Dayton', satMath: 650, state: 'OH', logo: 'https://logo.clearbit.com/udayton.edu' },
  { id: 'xavier', name: 'Xavier University', satMath: 640, state: 'OH', logo: 'https://logo.clearbit.com/xavier.edu' },
  { id: 'denison', name: 'Denison University', satMath: 700, state: 'OH', logo: 'https://logo.clearbit.com/denison.edu' },
  { id: 'kenyon', name: 'Kenyon College', satMath: 710, state: 'OH', logo: 'https://logo.clearbit.com/kenyon.edu' },
  { id: 'wooster', name: 'College of Wooster', satMath: 670, state: 'OH', logo: 'https://logo.clearbit.com/wooster.edu' },
  { id: 'ohio-wesleyan', name: 'Ohio Wesleyan University', satMath: 630, state: 'OH', logo: 'https://logo.clearbit.com/owu.edu' },

  // More Michigan Schools
  { id: 'western-michigan', name: 'Western Michigan University', satMath: 600, state: 'MI', logo: 'https://logo.clearbit.com/wmich.edu' },
  { id: 'eastern-michigan', name: 'Eastern Michigan University', satMath: 560, state: 'MI', logo: 'https://logo.clearbit.com/emich.edu' },
  { id: 'central-michigan', name: 'Central Michigan University', satMath: 570, state: 'MI', logo: 'https://logo.clearbit.com/cmich.edu' },
  { id: 'oakland-mi', name: 'Oakland University', satMath: 590, state: 'MI', logo: 'https://logo.clearbit.com/oakland.edu' },
  { id: 'wayne-state', name: 'Wayne State University', satMath: 600, state: 'MI', logo: 'https://logo.clearbit.com/wayne.edu' },
  { id: 'grand-valley', name: 'Grand Valley State University', satMath: 590, state: 'MI', logo: 'https://logo.clearbit.com/gvsu.edu' },
  { id: 'ferris', name: 'Ferris State University', satMath: 550, state: 'MI', logo: 'https://logo.clearbit.com/ferris.edu' },
  { id: 'northern-michigan', name: 'Northern Michigan University', satMath: 560, state: 'MI', logo: 'https://logo.clearbit.com/nmu.edu' },
  { id: 'saginaw-valley', name: 'Saginaw Valley State University', satMath: 540, state: 'MI', logo: 'https://logo.clearbit.com/svsu.edu' },
  { id: 'lake-superior', name: 'Lake Superior State University', satMath: 530, state: 'MI', logo: 'https://logo.clearbit.com/lssu.edu' },
  { id: 'michigan-tech', name: 'Michigan Technological University', satMath: 680, state: 'MI', logo: 'https://logo.clearbit.com/mtu.edu' },
  { id: 'hope', name: 'Hope College', satMath: 650, state: 'MI', logo: 'https://logo.clearbit.com/hope.edu' },
  { id: 'calvin', name: 'Calvin University', satMath: 640, state: 'MI', logo: 'https://logo.clearbit.com/calvin.edu' },
  { id: 'kalamazoo', name: 'Kalamazoo College', satMath: 680, state: 'MI', logo: 'https://logo.clearbit.com/kzoo.edu' },
  { id: 'albion', name: 'Albion College', satMath: 620, state: 'MI', logo: 'https://logo.clearbit.com/albion.edu' },
  { id: 'alma', name: 'Alma College', satMath: 600, state: 'MI', logo: 'https://logo.clearbit.com/alma.edu' },

  // More Illinois Schools
  { id: 'uic', name: 'University of Illinois Chicago', satMath: 650, state: 'IL', logo: 'https://logo.clearbit.com/uic.edu' },
  { id: 'northern-illinois', name: 'Northern Illinois University', satMath: 580, state: 'IL', logo: 'https://logo.clearbit.com/niu.edu' },
  { id: 'southern-illinois', name: 'Southern Illinois University', satMath: 570, state: 'IL', logo: 'https://logo.clearbit.com/siu.edu' },
  { id: 'illinois-state', name: 'Illinois State University', satMath: 600, state: 'IL', logo: 'https://logo.clearbit.com/ilstu.edu' },
  { id: 'western-illinois', name: 'Western Illinois University', satMath: 550, state: 'IL', logo: 'https://logo.clearbit.com/wiu.edu' },
  { id: 'eastern-illinois', name: 'Eastern Illinois University', satMath: 550, state: 'IL', logo: 'https://logo.clearbit.com/eiu.edu' },
  { id: 'bradley', name: 'Bradley University', satMath: 620, state: 'IL', logo: 'https://logo.clearbit.com/bradley.edu' },
  { id: 'knox', name: 'Knox College', satMath: 660, state: 'IL', logo: 'https://logo.clearbit.com/knox.edu' },
  { id: 'lake-forest', name: 'Lake Forest College', satMath: 640, state: 'IL', logo: 'https://logo.clearbit.com/lakeforest.edu' },
  { id: 'wheaton-il', name: 'Wheaton College (Illinois)', satMath: 680, state: 'IL', logo: 'https://logo.clearbit.com/wheaton.edu' },
  { id: 'illinois-wesleyan', name: 'Illinois Wesleyan University', satMath: 650, state: 'IL', logo: 'https://logo.clearbit.com/iwu.edu' },
  { id: 'augustana-il', name: 'Augustana College (Illinois)', satMath: 630, state: 'IL', logo: 'https://logo.clearbit.com/augustana.edu' },

  // More Indiana Schools
  { id: 'ball-state', name: 'Ball State University', satMath: 580, state: 'IN', logo: 'https://logo.clearbit.com/bsu.edu' },
  { id: 'indiana-state', name: 'Indiana State University', satMath: 550, state: 'IN', logo: 'https://logo.clearbit.com/indstate.edu' },
  { id: 'valparaiso', name: 'Valparaiso University', satMath: 640, state: 'IN', logo: 'https://logo.clearbit.com/valpo.edu' },
  { id: 'butler', name: 'Butler University', satMath: 630, state: 'IN', logo: 'https://logo.clearbit.com/butler.edu' },
  { id: 'depauw', name: 'DePauw University', satMath: 660, state: 'IN', logo: 'https://logo.clearbit.com/depauw.edu' },
  { id: 'evansville', name: 'University of Evansville', satMath: 620, state: 'IN', logo: 'https://logo.clearbit.com/evansville.edu' },
  { id: 'wabash', name: 'Wabash College', satMath: 640, state: 'IN', logo: 'https://logo.clearbit.com/wabash.edu' },
  { id: 'iupui', name: 'IUPUI', satMath: 580, state: 'IN', logo: 'https://logo.clearbit.com/iupui.edu' },

  // More Wisconsin Schools
  { id: 'uw-milwaukee', name: 'UW-Milwaukee', satMath: 600, state: 'WI', logo: 'https://logo.clearbit.com/uwm.edu' },
  { id: 'uw-green-bay', name: 'UW-Green Bay', satMath: 560, state: 'WI', logo: 'https://logo.clearbit.com/uwgb.edu' },
  { id: 'uw-la-crosse', name: 'UW-La Crosse', satMath: 620, state: 'WI', logo: 'https://logo.clearbit.com/uwlax.edu' },
  { id: 'uw-eau-claire', name: 'UW-Eau Claire', satMath: 600, state: 'WI', logo: 'https://logo.clearbit.com/uwec.edu' },
  { id: 'uw-oshkosh', name: 'UW-Oshkosh', satMath: 570, state: 'WI', logo: 'https://logo.clearbit.com/uwosh.edu' },
  { id: 'uw-whitewater', name: 'UW-Whitewater', satMath: 560, state: 'WI', logo: 'https://logo.clearbit.com/uww.edu' },
  { id: 'uw-stout', name: 'UW-Stout', satMath: 570, state: 'WI', logo: 'https://logo.clearbit.com/uwstout.edu' },
  { id: 'uw-platteville', name: 'UW-Platteville', satMath: 580, state: 'WI', logo: 'https://logo.clearbit.com/uwplatt.edu' },
  { id: 'uw-stevens-point', name: 'UW-Stevens Point', satMath: 560, state: 'WI', logo: 'https://logo.clearbit.com/uwsp.edu' },
  { id: 'uw-river-falls', name: 'UW-River Falls', satMath: 550, state: 'WI', logo: 'https://logo.clearbit.com/uwrf.edu' },
  { id: 'uw-parkside', name: 'UW-Parkside', satMath: 530, state: 'WI', logo: 'https://logo.clearbit.com/uwp.edu' },
  { id: 'uw-superior', name: 'UW-Superior', satMath: 530, state: 'WI', logo: 'https://logo.clearbit.com/uwsuper.edu' },
  { id: 'lawrence', name: 'Lawrence University', satMath: 700, state: 'WI', logo: 'https://logo.clearbit.com/lawrence.edu' },
  { id: 'beloit', name: 'Beloit College', satMath: 660, state: 'WI', logo: 'https://logo.clearbit.com/beloit.edu' },
  { id: 'ripon', name: 'Ripon College', satMath: 620, state: 'WI', logo: 'https://logo.clearbit.com/ripon.edu' },

  // More Minnesota Schools
  { id: 'umn-duluth', name: 'UMN Duluth', satMath: 620, state: 'MN', logo: 'https://logo.clearbit.com/d.umn.edu' },
  { id: 'umn-morris', name: 'UMN Morris', satMath: 640, state: 'MN', logo: 'https://logo.clearbit.com/morris.umn.edu' },
  { id: 'st-olaf', name: 'St. Olaf College', satMath: 680, state: 'MN', logo: 'https://logo.clearbit.com/stolaf.edu' },
  { id: 'gustavus', name: 'Gustavus Adolphus College', satMath: 640, state: 'MN', logo: 'https://logo.clearbit.com/gustavus.edu' },
  { id: 'st-thomas', name: 'University of St. Thomas', satMath: 630, state: 'MN', logo: 'https://logo.clearbit.com/stthomas.edu' },
  { id: 'augsburg', name: 'Augsburg University', satMath: 580, state: 'MN', logo: 'https://logo.clearbit.com/augsburg.edu' },
  { id: 'hamline', name: 'Hamline University', satMath: 590, state: 'MN', logo: 'https://logo.clearbit.com/hamline.edu' },
  { id: 'bethel-mn', name: 'Bethel University (Minnesota)', satMath: 600, state: 'MN', logo: 'https://logo.clearbit.com/bethel.edu' },
  { id: 'concordia-mn', name: 'Concordia College (Minnesota)', satMath: 610, state: 'MN', logo: 'https://logo.clearbit.com/cord.edu' },
  { id: 'st-johns', name: 'College of Saint Benedict/Saint John\'s', satMath: 620, state: 'MN', logo: 'https://logo.clearbit.com/csbsju.edu' },
  { id: 'winona-state', name: 'Winona State University', satMath: 580, state: 'MN', logo: 'https://logo.clearbit.com/winona.edu' },
  { id: 'mankato', name: 'Minnesota State Mankato', satMath: 570, state: 'MN', logo: 'https://logo.clearbit.com/mnsu.edu' },
  { id: 'st-cloud', name: 'St. Cloud State University', satMath: 560, state: 'MN', logo: 'https://logo.clearbit.com/stcloudstate.edu' },
  { id: 'bemidji', name: 'Bemidji State University', satMath: 540, state: 'MN', logo: 'https://logo.clearbit.com/bemidjistate.edu' },
  { id: 'moorhead', name: 'Minnesota State Moorhead', satMath: 550, state: 'MN', logo: 'https://logo.clearbit.com/mnstate.edu' },

  // More Iowa Schools
  { id: 'iowa-state', name: 'Iowa State University', satMath: 660, state: 'IA', logo: 'https://logo.clearbit.com/iastate.edu' },
  { id: 'uni', name: 'University of Northern Iowa', satMath: 590, state: 'IA', logo: 'https://logo.clearbit.com/uni.edu' },
  { id: 'drake', name: 'Drake University', satMath: 640, state: 'IA', logo: 'https://logo.clearbit.com/drake.edu' },
  { id: 'coe', name: 'Coe College', satMath: 620, state: 'IA', logo: 'https://logo.clearbit.com/coe.edu' },
  { id: 'cornell-ia', name: 'Cornell College (Iowa)', satMath: 640, state: 'IA', logo: 'https://logo.clearbit.com/cornellcollege.edu' },
  { id: 'luther', name: 'Luther College', satMath: 630, state: 'IA', logo: 'https://logo.clearbit.com/luther.edu' },
  { id: 'wartburg', name: 'Wartburg College', satMath: 600, state: 'IA', logo: 'https://logo.clearbit.com/wartburg.edu' },
  { id: 'simpson', name: 'Simpson College', satMath: 580, state: 'IA', logo: 'https://logo.clearbit.com/simpson.edu' },
  { id: 'central-ia', name: 'Central College (Iowa)', satMath: 590, state: 'IA', logo: 'https://logo.clearbit.com/central.edu' },

  // More Massachusetts Schools
  { id: 'umass-lowell', name: 'UMass Lowell', satMath: 650, state: 'MA', logo: 'https://logo.clearbit.com/uml.edu' },
  { id: 'umass-dartmouth', name: 'UMass Dartmouth', satMath: 600, state: 'MA', logo: 'https://logo.clearbit.com/umassd.edu' },
  { id: 'umass-boston', name: 'UMass Boston', satMath: 590, state: 'MA', logo: 'https://logo.clearbit.com/umb.edu' },
  { id: 'bridgewater', name: 'Bridgewater State University', satMath: 560, state: 'MA', logo: 'https://logo.clearbit.com/bridgew.edu' },
  { id: 'framingham', name: 'Framingham State University', satMath: 550, state: 'MA', logo: 'https://logo.clearbit.com/framingham.edu' },
  { id: 'fitchburg', name: 'Fitchburg State University', satMath: 540, state: 'MA', logo: 'https://logo.clearbit.com/fitchburgstate.edu' },
  { id: 'salem-state', name: 'Salem State University', satMath: 540, state: 'MA', logo: 'https://logo.clearbit.com/salemstate.edu' },
  { id: 'westfield', name: 'Westfield State University', satMath: 540, state: 'MA', logo: 'https://logo.clearbit.com/westfield.ma.edu' },
  { id: 'merrimack', name: 'Merrimack College', satMath: 620, state: 'MA', logo: 'https://logo.clearbit.com/merrimack.edu' },
  { id: 'assumption', name: 'Assumption University', satMath: 590, state: 'MA', logo: 'https://logo.clearbit.com/assumption.edu' },
  { id: 'stonehill', name: 'Stonehill College', satMath: 620, state: 'MA', logo: 'https://logo.clearbit.com/stonehill.edu' },
  { id: 'emmanuel', name: 'Emmanuel College', satMath: 580, state: 'MA', logo: 'https://logo.clearbit.com/emmanuel.edu' },
  { id: 'simmons', name: 'Simmons University', satMath: 600, state: 'MA', logo: 'https://logo.clearbit.com/simmons.edu' },
  { id: 'wheaton-ma', name: 'Wheaton College (Massachusetts)', satMath: 660, state: 'MA', logo: 'https://logo.clearbit.com/wheatoncollege.edu' },
  { id: 'holy-cross', name: 'College of the Holy Cross', satMath: 710, state: 'MA', logo: 'https://logo.clearbit.com/holycross.edu' },
  { id: 'mount-holyoke', name: 'Mount Holyoke College', satMath: 700, state: 'MA', logo: 'https://logo.clearbit.com/mtholyoke.edu' },
  { id: 'hampshire', name: 'Hampshire College', satMath: 640, state: 'MA', logo: 'https://logo.clearbit.com/hampshire.edu' },

  // More Connecticut Schools
  { id: 'uconn-stamford', name: 'UConn Stamford', satMath: 650, state: 'CT', logo: 'https://logo.clearbit.com/stamford.uconn.edu' },
  { id: 'southern-ct', name: 'Southern Connecticut State', satMath: 550, state: 'CT', logo: 'https://logo.clearbit.com/southernct.edu' },
  { id: 'central-ct', name: 'Central Connecticut State', satMath: 560, state: 'CT', logo: 'https://logo.clearbit.com/ccsu.edu' },
  { id: 'eastern-ct', name: 'Eastern Connecticut State', satMath: 550, state: 'CT', logo: 'https://logo.clearbit.com/easternct.edu' },
  { id: 'western-ct', name: 'Western Connecticut State', satMath: 540, state: 'CT', logo: 'https://logo.clearbit.com/wcsu.edu' },
  { id: 'connecticut-college', name: 'Connecticut College', satMath: 720, state: 'CT', logo: 'https://logo.clearbit.com/conncoll.edu' },

  // More Virginia Schools
  { id: 'jmu', name: 'James Madison University', satMath: 640, state: 'VA', logo: 'https://logo.clearbit.com/jmu.edu' },
  { id: 'gmu', name: 'George Mason University', satMath: 630, state: 'VA', logo: 'https://logo.clearbit.com/gmu.edu' },
  { id: 'odu', name: 'Old Dominion University', satMath: 580, state: 'VA', logo: 'https://logo.clearbit.com/odu.edu' },
  { id: 'radford', name: 'Radford University', satMath: 550, state: 'VA', logo: 'https://logo.clearbit.com/radford.edu' },
  { id: 'longwood', name: 'Longwood University', satMath: 560, state: 'VA', logo: 'https://logo.clearbit.com/longwood.edu' },
  { id: 'christopher-newport', name: 'Christopher Newport University', satMath: 620, state: 'VA', logo: 'https://logo.clearbit.com/cnu.edu' },
  { id: 'mary-washington', name: 'University of Mary Washington', satMath: 620, state: 'VA', logo: 'https://logo.clearbit.com/umw.edu' },
  { id: 'richmond', name: 'University of Richmond', satMath: 720, state: 'VA', logo: 'https://logo.clearbit.com/richmond.edu' },
  { id: 'washington-lee', name: 'Washington and Lee University', satMath: 740, state: 'VA', logo: 'https://logo.clearbit.com/wlu.edu' },
  { id: 'hampton-sydney', name: 'Hampden-Sydney College', satMath: 610, state: 'VA', logo: 'https://logo.clearbit.com/hsc.edu' },
  { id: 'randolph-macon', name: 'Randolph-Macon College', satMath: 600, state: 'VA', logo: 'https://logo.clearbit.com/rmc.edu' },
  { id: 'roanoke', name: 'Roanoke College', satMath: 590, state: 'VA', logo: 'https://logo.clearbit.com/roanoke.edu' },
  { id: 'sweet-briar', name: 'Sweet Briar College', satMath: 580, state: 'VA', logo: 'https://logo.clearbit.com/sbc.edu' },
  { id: 'lynchburg', name: 'University of Lynchburg', satMath: 570, state: 'VA', logo: 'https://logo.clearbit.com/lynchburg.edu' },
  { id: 'liberty', name: 'Liberty University', satMath: 580, state: 'VA', logo: 'https://logo.clearbit.com/liberty.edu' },
  { id: 'regent', name: 'Regent University', satMath: 560, state: 'VA', logo: 'https://logo.clearbit.com/regent.edu' },

  // More North Carolina Schools
  { id: 'nc-state', name: 'NC State University', satMath: 700, state: 'NC', logo: 'https://logo.clearbit.com/ncsu.edu' },
  { id: 'uncc', name: 'UNC Charlotte', satMath: 620, state: 'NC', logo: 'https://logo.clearbit.com/charlotte.edu' },
  { id: 'uncg', name: 'UNC Greensboro', satMath: 580, state: 'NC', logo: 'https://logo.clearbit.com/uncg.edu' },
  { id: 'uncw', name: 'UNC Wilmington', satMath: 620, state: 'NC', logo: 'https://logo.clearbit.com/uncw.edu' },
  { id: 'unca', name: 'UNC Asheville', satMath: 620, state: 'NC', logo: 'https://logo.clearbit.com/unca.edu' },
  { id: 'ecu', name: 'East Carolina University', satMath: 580, state: 'NC', logo: 'https://logo.clearbit.com/ecu.edu' },
  { id: 'app-state', name: 'Appalachian State University', satMath: 620, state: 'NC', logo: 'https://logo.clearbit.com/appstate.edu' },
  { id: 'wcu', name: 'Western Carolina University', satMath: 570, state: 'NC', logo: 'https://logo.clearbit.com/wcu.edu' },
  { id: 'uncpembroke', name: 'UNC Pembroke', satMath: 530, state: 'NC', logo: 'https://logo.clearbit.com/uncp.edu' },
  { id: 'fayetteville', name: 'Fayetteville State University', satMath: 510, state: 'NC', logo: 'https://logo.clearbit.com/uncfsu.edu' },
  { id: 'winston-salem', name: 'Winston-Salem State University', satMath: 520, state: 'NC', logo: 'https://logo.clearbit.com/wssu.edu' },
  { id: 'elizabeth-city', name: 'Elizabeth City State University', satMath: 500, state: 'NC', logo: 'https://logo.clearbit.com/ecsu.edu' },

  // More Georgia Schools
  { id: 'georgia-state', name: 'Georgia State University', satMath: 600, state: 'GA', logo: 'https://logo.clearbit.com/gsu.edu' },
  { id: 'georgia-southern', name: 'Georgia Southern University', satMath: 580, state: 'GA', logo: 'https://logo.clearbit.com/georgiasouthern.edu' },
  { id: 'kennesaw', name: 'Kennesaw State University', satMath: 590, state: 'GA', logo: 'https://logo.clearbit.com/kennesaw.edu' },
  { id: 'augusta', name: 'Augusta University', satMath: 580, state: 'GA', logo: 'https://logo.clearbit.com/augusta.edu' },
  { id: 'valdosta', name: 'Valdosta State University', satMath: 560, state: 'GA', logo: 'https://logo.clearbit.com/valdosta.edu' },
  { id: 'west-georgia', name: 'University of West Georgia', satMath: 550, state: 'GA', logo: 'https://logo.clearbit.com/westga.edu' },
  { id: 'north-georgia', name: 'University of North Georgia', satMath: 580, state: 'GA', logo: 'https://logo.clearbit.com/ung.edu' },
  { id: 'columbus-state', name: 'Columbus State University', satMath: 540, state: 'GA', logo: 'https://logo.clearbit.com/columbusstate.edu' },
  { id: 'mercer', name: 'Mercer University', satMath: 640, state: 'GA', logo: 'https://logo.clearbit.com/mercer.edu' },
  { id: 'oglethorpe', name: 'Oglethorpe University', satMath: 620, state: 'GA', logo: 'https://logo.clearbit.com/oglethorpe.edu' },
  { id: 'agnes-scott', name: 'Agnes Scott College', satMath: 630, state: 'GA', logo: 'https://logo.clearbit.com/agnesscott.edu' },
  { id: 'berry', name: 'Berry College', satMath: 620, state: 'GA', logo: 'https://logo.clearbit.com/berry.edu' },

  // More South Carolina Schools
  { id: 'charleston', name: 'College of Charleston', satMath: 620, state: 'SC', logo: 'https://logo.clearbit.com/cofc.edu' },
  { id: 'coastal-carolina', name: 'Coastal Carolina University', satMath: 560, state: 'SC', logo: 'https://logo.clearbit.com/coastal.edu' },
  { id: 'winthrop', name: 'Winthrop University', satMath: 570, state: 'SC', logo: 'https://logo.clearbit.com/winthrop.edu' },
  { id: 'citadel', name: 'The Citadel', satMath: 600, state: 'SC', logo: 'https://logo.clearbit.com/citadel.edu' },
  { id: 'presbyterian', name: 'Presbyterian College', satMath: 590, state: 'SC', logo: 'https://logo.clearbit.com/presby.edu' },
  { id: 'wofford', name: 'Wofford College', satMath: 640, state: 'SC', logo: 'https://logo.clearbit.com/wofford.edu' },

  // More Tennessee Schools
  { id: 'memphis', name: 'University of Memphis', satMath: 590, state: 'TN', logo: 'https://logo.clearbit.com/memphis.edu' },
  { id: 'mtsu', name: 'Middle Tennessee State University', satMath: 580, state: 'TN', logo: 'https://logo.clearbit.com/mtsu.edu' },
  { id: 'etsu', name: 'East Tennessee State University', satMath: 570, state: 'TN', logo: 'https://logo.clearbit.com/etsu.edu' },
  { id: 'tntech', name: 'Tennessee Tech University', satMath: 600, state: 'TN', logo: 'https://logo.clearbit.com/tntech.edu' },
  { id: 'austin-peay', name: 'Austin Peay State University', satMath: 550, state: 'TN', logo: 'https://logo.clearbit.com/apsu.edu' },
  { id: 'uts', name: 'UT Southern', satMath: 520, state: 'TN', logo: 'https://logo.clearbit.com/utsouthern.edu' },
  { id: 'belmont', name: 'Belmont University', satMath: 640, state: 'TN', logo: 'https://logo.clearbit.com/belmont.edu' },
  { id: 'lipscomb', name: 'Lipscomb University', satMath: 620, state: 'TN', logo: 'https://logo.clearbit.com/lipscomb.edu' },
  { id: 'milligan', name: 'Milligan University', satMath: 590, state: 'TN', logo: 'https://logo.clearbit.com/milligan.edu' },
  { id: 'lee', name: 'Lee University', satMath: 580, state: 'TN', logo: 'https://logo.clearbit.com/leeuniversity.edu' },
  { id: 'carson-newman', name: 'Carson-Newman University', satMath: 570, state: 'TN', logo: 'https://logo.clearbit.com/cn.edu' },
  { id: 'union-tn', name: 'Union University (Tennessee)', satMath: 600, state: 'TN', logo: 'https://logo.clearbit.com/uu.edu' },

  // More Kentucky Schools
  { id: 'louisville', name: 'University of Louisville', satMath: 620, state: 'KY', logo: 'https://logo.clearbit.com/louisville.edu' },
  { id: 'wku', name: 'Western Kentucky University', satMath: 580, state: 'KY', logo: 'https://logo.clearbit.com/wku.edu' },
  { id: 'eku', name: 'Eastern Kentucky University', satMath: 560, state: 'KY', logo: 'https://logo.clearbit.com/eku.edu' },
  { id: 'nku', name: 'Northern Kentucky University', satMath: 570, state: 'KY', logo: 'https://logo.clearbit.com/nku.edu' },
  { id: 'murray', name: 'Murray State University', satMath: 560, state: 'KY', logo: 'https://logo.clearbit.com/murraystate.edu' },
  { id: 'morehead', name: 'Morehead State University', satMath: 540, state: 'KY', logo: 'https://logo.clearbit.com/moreheadstate.edu' },
  { id: 'transylvania', name: 'Transylvania University', satMath: 640, state: 'KY', logo: 'https://logo.clearbit.com/transy.edu' },
  { id: 'berea', name: 'Berea College', satMath: 610, state: 'KY', logo: 'https://logo.clearbit.com/berea.edu' },
  { id: 'bellarmine', name: 'Bellarmine University', satMath: 600, state: 'KY', logo: 'https://logo.clearbit.com/bellarmine.edu' },

  // More Alabama Schools
  { id: 'uab', name: 'University of Alabama at Birmingham', satMath: 620, state: 'AL', logo: 'https://logo.clearbit.com/uab.edu' },
  { id: 'uah', name: 'University of Alabama in Huntsville', satMath: 650, state: 'AL', logo: 'https://logo.clearbit.com/uah.edu' },
  { id: 'usa', name: 'University of South Alabama', satMath: 580, state: 'AL', logo: 'https://logo.clearbit.com/southalabama.edu' },
  { id: 'jsu', name: 'Jacksonville State University', satMath: 550, state: 'AL', logo: 'https://logo.clearbit.com/jsu.edu' },
  { id: 'una', name: 'University of North Alabama', satMath: 550, state: 'AL', logo: 'https://logo.clearbit.com/una.edu' },
  { id: 'troy', name: 'Troy University', satMath: 560, state: 'AL', logo: 'https://logo.clearbit.com/troy.edu' },
  { id: 'montevallo', name: 'University of Montevallo', satMath: 570, state: 'AL', logo: 'https://logo.clearbit.com/montevallo.edu' },
  { id: 'west-alabama', name: 'University of West Alabama', satMath: 510, state: 'AL', logo: 'https://logo.clearbit.com/uwa.edu' },
  { id: 'alabama-am', name: 'Alabama A&M University', satMath: 510, state: 'AL', logo: 'https://logo.clearbit.com/aamu.edu' },
  { id: 'alabama-state', name: 'Alabama State University', satMath: 500, state: 'AL', logo: 'https://logo.clearbit.com/alasu.edu' },
  { id: 'tuskegee', name: 'Tuskegee University', satMath: 540, state: 'AL', logo: 'https://logo.clearbit.com/tuskegee.edu' },
  { id: 'samford', name: 'Samford University', satMath: 640, state: 'AL', logo: 'https://logo.clearbit.com/samford.edu' },
  { id: 'birmingham-southern', name: 'Birmingham-Southern College', satMath: 600, state: 'AL', logo: 'https://logo.clearbit.com/bsc.edu' },

  // More Mississippi Schools
  { id: 'southern-miss', name: 'University of Southern Mississippi', satMath: 580, state: 'MS', logo: 'https://logo.clearbit.com/usm.edu' },
  { id: 'jackson-state', name: 'Jackson State University', satMath: 510, state: 'MS', logo: 'https://logo.clearbit.com/jsums.edu' },
  { id: 'alcorn', name: 'Alcorn State University', satMath: 490, state: 'MS', logo: 'https://logo.clearbit.com/alcorn.edu' },
  { id: 'delta-state', name: 'Delta State University', satMath: 520, state: 'MS', logo: 'https://logo.clearbit.com/deltastate.edu' },
  { id: 'millsaps', name: 'Millsaps College', satMath: 620, state: 'MS', logo: 'https://logo.clearbit.com/millsaps.edu' },

  // More Louisiana Schools
  { id: 'louisiana-tech', name: 'Louisiana Tech University', satMath: 600, state: 'LA', logo: 'https://logo.clearbit.com/latech.edu' },
  { id: 'ull', name: 'University of Louisiana at Lafayette', satMath: 580, state: 'LA', logo: 'https://logo.clearbit.com/louisiana.edu' },
  { id: 'ulm', name: 'University of Louisiana at Monroe', satMath: 550, state: 'LA', logo: 'https://logo.clearbit.com/ulm.edu' },
  { id: 'mcneese', name: 'McNeese State University', satMath: 550, state: 'LA', logo: 'https://logo.clearbit.com/mcneese.edu' },
  { id: 'nicholls', name: 'Nicholls State University', satMath: 540, state: 'LA', logo: 'https://logo.clearbit.com/nicholls.edu' },
  { id: 'northwestern-la', name: 'Northwestern State University (Louisiana)', satMath: 530, state: 'LA', logo: 'https://logo.clearbit.com/nsula.edu' },
  { id: 'southeastern-la', name: 'Southeastern Louisiana University', satMath: 550, state: 'LA', logo: 'https://logo.clearbit.com/southeastern.edu' },
  { id: 'southern-la', name: 'Southern University and A&M College', satMath: 510, state: 'LA', logo: 'https://logo.clearbit.com/subr.edu' },
  { id: 'grambling', name: 'Grambling State University', satMath: 500, state: 'LA', logo: 'https://logo.clearbit.com/gram.edu' },
  { id: 'loyola-nola', name: 'Loyola University New Orleans', satMath: 620, state: 'LA', logo: 'https://logo.clearbit.com/loyno.edu' },
  { id: 'xavier-la', name: 'Xavier University of Louisiana', satMath: 560, state: 'LA', logo: 'https://logo.clearbit.com/xula.edu' },

  // More Arkansas Schools
  { id: 'arkansas-state', name: 'Arkansas State University', satMath: 560, state: 'AR', logo: 'https://logo.clearbit.com/astate.edu' },
  { id: 'uca', name: 'University of Central Arkansas', satMath: 570, state: 'AR', logo: 'https://logo.clearbit.com/uca.edu' },
  { id: 'ualr', name: 'University of Arkansas at Little Rock', satMath: 550, state: 'AR', logo: 'https://logo.clearbit.com/ualr.edu' },
  { id: 'hendrix', name: 'Hendrix College', satMath: 660, state: 'AR', logo: 'https://logo.clearbit.com/hendrix.edu' },
  { id: 'harding', name: 'Harding University', satMath: 600, state: 'AR', logo: 'https://logo.clearbit.com/harding.edu' },
  { id: 'lyon', name: 'Lyon College', satMath: 580, state: 'AR', logo: 'https://logo.clearbit.com/lyon.edu' },
  { id: 'ouachita', name: 'Ouachita Baptist University', satMath: 590, state: 'AR', logo: 'https://logo.clearbit.com/obu.edu' },

  // More Oklahoma Schools
  { id: 'osu-ok', name: 'Oklahoma State University', satMath: 620, state: 'OK', logo: 'https://logo.clearbit.com/okstate.edu' },
  { id: 'uco', name: 'University of Central Oklahoma', satMath: 560, state: 'OK', logo: 'https://logo.clearbit.com/uco.edu' },
  { id: 'cameron', name: 'Cameron University', satMath: 530, state: 'OK', logo: 'https://logo.clearbit.com/cameron.edu' },
  { id: 'swosu', name: 'Southwestern Oklahoma State University', satMath: 540, state: 'OK', logo: 'https://logo.clearbit.com/swosu.edu' },
  { id: 'nwosu', name: 'Northwestern Oklahoma State University', satMath: 520, state: 'OK', logo: 'https://logo.clearbit.com/nwosu.edu' },
  { id: 'langston', name: 'Langston University', satMath: 490, state: 'OK', logo: 'https://logo.clearbit.com/langston.edu' },
  { id: 'oral-roberts', name: 'Oral Roberts University', satMath: 580, state: 'OK', logo: 'https://logo.clearbit.com/oru.edu' },
  { id: 'ocu', name: 'Oklahoma City University', satMath: 590, state: 'OK', logo: 'https://logo.clearbit.com/okcu.edu' },

  // More Kansas Schools
  { id: 'kansas-state', name: 'Kansas State University', satMath: 620, state: 'KS', logo: 'https://logo.clearbit.com/k-state.edu' },
  { id: 'wichita', name: 'Wichita State University', satMath: 590, state: 'KS', logo: 'https://logo.clearbit.com/wichita.edu' },
  { id: 'emporia', name: 'Emporia State University', satMath: 550, state: 'KS', logo: 'https://logo.clearbit.com/emporia.edu' },
  { id: 'pittsburg', name: 'Pittsburg State University', satMath: 550, state: 'KS', logo: 'https://logo.clearbit.com/pittstate.edu' },
  { id: 'fhsu', name: 'Fort Hays State University', satMath: 540, state: 'KS', logo: 'https://logo.clearbit.com/fhsu.edu' },
  { id: 'washburn', name: 'Washburn University', satMath: 560, state: 'KS', logo: 'https://logo.clearbit.com/washburn.edu' },
  { id: 'baker', name: 'Baker University', satMath: 570, state: 'KS', logo: 'https://logo.clearbit.com/bakeru.edu' },
  { id: 'friends', name: 'Friends University', satMath: 540, state: 'KS', logo: 'https://logo.clearbit.com/friends.edu' },

  // More Nebraska Schools
  { id: 'uno', name: 'University of Nebraska Omaha', satMath: 580, state: 'NE', logo: 'https://logo.clearbit.com/unomaha.edu' },
  { id: 'unk', name: 'University of Nebraska Kearney', satMath: 560, state: 'NE', logo: 'https://logo.clearbit.com/unk.edu' },
  { id: 'wayne-state-ne', name: 'Wayne State College (Nebraska)', satMath: 530, state: 'NE', logo: 'https://logo.clearbit.com/wsc.edu' },
  { id: 'peru-state', name: 'Peru State College', satMath: 510, state: 'NE', logo: 'https://logo.clearbit.com/peru.edu' },
  { id: 'chadron', name: 'Chadron State College', satMath: 520, state: 'NE', logo: 'https://logo.clearbit.com/csc.edu' },
  { id: 'nebraska-wesleyan', name: 'Nebraska Wesleyan University', satMath: 600, state: 'NE', logo: 'https://logo.clearbit.com/nebrwesleyan.edu' },
  { id: 'hastings', name: 'Hastings College', satMath: 570, state: 'NE', logo: 'https://logo.clearbit.com/hastings.edu' },
  { id: 'doane', name: 'Doane University', satMath: 560, state: 'NE', logo: 'https://logo.clearbit.com/doane.edu' },
  { id: 'concordia-ne', name: 'Concordia University Nebraska', satMath: 560, state: 'NE', logo: 'https://logo.clearbit.com/cune.edu' },

  // More North Dakota Schools
  { id: 'und', name: 'University of North Dakota', satMath: 590, state: 'ND', logo: 'https://logo.clearbit.com/und.edu' },
  { id: 'dickinson-nd', name: 'Dickinson State University', satMath: 510, state: 'ND', logo: 'https://logo.clearbit.com/dickinsonstate.edu' },
  { id: 'mayville', name: 'Mayville State University', satMath: 500, state: 'ND', logo: 'https://logo.clearbit.com/mayvillestate.edu' },
  { id: 'minot', name: 'Minot State University', satMath: 530, state: 'ND', logo: 'https://logo.clearbit.com/minotstateu.edu' },
  { id: 'valley-city', name: 'Valley City State University', satMath: 520, state: 'ND', logo: 'https://logo.clearbit.com/vcsu.edu' },

  // More South Dakota Schools
  { id: 'usd-sd', name: 'University of South Dakota', satMath: 580, state: 'SD', logo: 'https://logo.clearbit.com/usd.edu' },
  { id: 'sdsmt', name: 'South Dakota School of Mines', satMath: 650, state: 'SD', logo: 'https://logo.clearbit.com/sdsmt.edu' },
  { id: 'northern-sd', name: 'Northern State University', satMath: 530, state: 'SD', logo: 'https://logo.clearbit.com/northern.edu' },
  { id: 'bhsu', name: 'Black Hills State University', satMath: 530, state: 'SD', logo: 'https://logo.clearbit.com/bhsu.edu' },
  { id: 'dsu-sd', name: 'Dakota State University', satMath: 550, state: 'SD', logo: 'https://logo.clearbit.com/dsu.edu' },
  { id: 'augustana-sd', name: 'Augustana University (South Dakota)', satMath: 610, state: 'SD', logo: 'https://logo.clearbit.com/augie.edu' },

  // More Montana Schools
  { id: 'montana-state', name: 'Montana State University', satMath: 590, state: 'MT', logo: 'https://logo.clearbit.com/montana.edu' },
  { id: 'montana-tech', name: 'Montana Technological University', satMath: 600, state: 'MT', logo: 'https://logo.clearbit.com/mtech.edu' },
  { id: 'msub', name: 'Montana State Billings', satMath: 540, state: 'MT', logo: 'https://logo.clearbit.com/msubillings.edu' },
  { id: 'msun', name: 'Montana State Northern', satMath: 510, state: 'MT', logo: 'https://logo.clearbit.com/msun.edu' },
  { id: 'carroll', name: 'Carroll College', satMath: 580, state: 'MT', logo: 'https://logo.clearbit.com/carroll.edu' },
  { id: 'rocky', name: 'Rocky Mountain College', satMath: 550, state: 'MT', logo: 'https://logo.clearbit.com/rocky.edu' },

  // More Wyoming Schools
  { id: 'casper', name: 'Casper College', satMath: 520, state: 'WY', logo: 'https://logo.clearbit.com/caspercollege.edu' },

  // More Idaho Schools
  { id: 'idaho-state', name: 'Idaho State University', satMath: 560, state: 'ID', logo: 'https://logo.clearbit.com/isu.edu' },
  { id: 'lewis-clark-id', name: 'Lewis-Clark State College', satMath: 530, state: 'ID', logo: 'https://logo.clearbit.com/lcsc.edu' },
  { id: 'nwn', name: 'Northwest Nazarene University', satMath: 570, state: 'ID', logo: 'https://logo.clearbit.com/nnu.edu' },
  { id: 'byu-idaho', name: 'BYU-Idaho', satMath: 590, state: 'ID', logo: 'https://logo.clearbit.com/byui.edu' },
  { id: 'ci', name: 'College of Idaho', satMath: 610, state: 'ID', logo: 'https://logo.clearbit.com/collegeofidaho.edu' },

  // More Nevada Schools
  { id: 'unr', name: 'University of Nevada Reno', satMath: 590, state: 'NV', logo: 'https://logo.clearbit.com/unr.edu' },
  { id: 'nevada-state', name: 'Nevada State College', satMath: 530, state: 'NV', logo: 'https://logo.clearbit.com/nsc.edu' },

  // More New Mexico Schools
  { id: 'enmu', name: 'Eastern New Mexico University', satMath: 520, state: 'NM', logo: 'https://logo.clearbit.com/enmu.edu' },
  { id: 'wnmu', name: 'Western New Mexico University', satMath: 510, state: 'NM', logo: 'https://logo.clearbit.com/wnmu.edu' },
  { id: 'highlands', name: 'New Mexico Highlands University', satMath: 500, state: 'NM', logo: 'https://logo.clearbit.com/nmhu.edu' },
  { id: 'nmtech', name: 'New Mexico Institute of Mining and Technology', satMath: 650, state: 'NM', logo: 'https://logo.clearbit.com/nmt.edu' },

  // More Arizona Schools
  { id: 'nau', name: 'Northern Arizona University', satMath: 580, state: 'AZ', logo: 'https://logo.clearbit.com/nau.edu' },
  { id: 'gcu', name: 'Grand Canyon University', satMath: 560, state: 'AZ', logo: 'https://logo.clearbit.com/gcu.edu' },
  { id: 'embry-riddle-az', name: 'Embry-Riddle Aeronautical (Arizona)', satMath: 640, state: 'AZ', logo: 'https://logo.clearbit.com/erau.edu' },

  // More Hawaii Schools
  { id: 'hpu', name: 'Hawaii Pacific University', satMath: 570, state: 'HI', logo: 'https://logo.clearbit.com/hpu.edu' },
  { id: 'chaminade', name: 'Chaminade University of Honolulu', satMath: 540, state: 'HI', logo: 'https://logo.clearbit.com/chaminade.edu' },

  // More Alaska Schools
  { id: 'uaa', name: 'University of Alaska Anchorage', satMath: 560, state: 'AK', logo: 'https://logo.clearbit.com/uaa.alaska.edu' },
  { id: 'uas', name: 'University of Alaska Southeast', satMath: 540, state: 'AK', logo: 'https://logo.clearbit.com/uas.alaska.edu' },

  // More New Jersey Schools
  { id: 'tcnj', name: 'The College of New Jersey', satMath: 680, state: 'NJ', logo: 'https://logo.clearbit.com/tcnj.edu' },
  { id: 'rowan', name: 'Rowan University', satMath: 620, state: 'NJ', logo: 'https://logo.clearbit.com/rowan.edu' },
  { id: 'montclair', name: 'Montclair State University', satMath: 590, state: 'NJ', logo: 'https://logo.clearbit.com/montclair.edu' },
  { id: 'kean', name: 'Kean University', satMath: 560, state: 'NJ', logo: 'https://logo.clearbit.com/kean.edu' },
  { id: 'william-paterson', name: 'William Paterson University', satMath: 540, state: 'NJ', logo: 'https://logo.clearbit.com/wpunj.edu' },
  { id: 'stockton', name: 'Stockton University', satMath: 580, state: 'NJ', logo: 'https://logo.clearbit.com/stockton.edu' },
  { id: 'ramapo', name: 'Ramapo College', satMath: 600, state: 'NJ', logo: 'https://logo.clearbit.com/ramapo.edu' },
  { id: 'rider', name: 'Rider University', satMath: 580, state: 'NJ', logo: 'https://logo.clearbit.com/rider.edu' },
  { id: 'seton-hall', name: 'Seton Hall University', satMath: 640, state: 'NJ', logo: 'https://logo.clearbit.com/shu.edu' },
  { id: 'monmouth', name: 'Monmouth University', satMath: 600, state: 'NJ', logo: 'https://logo.clearbit.com/monmouth.edu' },
  { id: 'fdu', name: 'Fairleigh Dickinson University', satMath: 580, state: 'NJ', logo: 'https://logo.clearbit.com/fdu.edu' },
  { id: 'drew', name: 'Drew University', satMath: 620, state: 'NJ', logo: 'https://logo.clearbit.com/drew.edu' },

  // More Maryland Schools
  { id: 'towson', name: 'Towson University', satMath: 600, state: 'MD', logo: 'https://logo.clearbit.com/towson.edu' },
  { id: 'umbc', name: 'UMBC', satMath: 660, state: 'MD', logo: 'https://logo.clearbit.com/umbc.edu' },
  { id: 'salisbury', name: 'Salisbury University', satMath: 590, state: 'MD', logo: 'https://logo.clearbit.com/salisbury.edu' },
  { id: 'frostburg', name: 'Frostburg State University', satMath: 550, state: 'MD', logo: 'https://logo.clearbit.com/frostburg.edu' },
  { id: 'bowie-state', name: 'Bowie State University', satMath: 520, state: 'MD', logo: 'https://logo.clearbit.com/bowiestate.edu' },
  { id: 'coppin', name: 'Coppin State University', satMath: 500, state: 'MD', logo: 'https://logo.clearbit.com/coppin.edu' },
  { id: 'morgan', name: 'Morgan State University', satMath: 530, state: 'MD', logo: 'https://logo.clearbit.com/morgan.edu' },
  { id: 'loyola-md', name: 'Loyola University Maryland', satMath: 660, state: 'MD', logo: 'https://logo.clearbit.com/loyola.edu' },
  { id: 'goucher', name: 'Goucher College', satMath: 620, state: 'MD', logo: 'https://logo.clearbit.com/goucher.edu' },
  { id: 'hood', name: 'Hood College', satMath: 580, state: 'MD', logo: 'https://logo.clearbit.com/hood.edu' },
  { id: 'mcdaniel', name: 'McDaniel College', satMath: 590, state: 'MD', logo: 'https://logo.clearbit.com/mcdaniel.edu' },
  { id: 'washington-md', name: 'Washington College', satMath: 610, state: 'MD', logo: 'https://logo.clearbit.com/washcoll.edu' },
  { id: 'st-marys-md', name: 'St. Mary\'s College of Maryland', satMath: 640, state: 'MD', logo: 'https://logo.clearbit.com/smcm.edu' },

  // More Washington D.C. Schools
  { id: 'catholic', name: 'Catholic University of America', satMath: 630, state: 'DC', logo: 'https://logo.clearbit.com/cua.edu' },
  { id: 'gallaudet', name: 'Gallaudet University', satMath: 540, state: 'DC', logo: 'https://logo.clearbit.com/gallaudet.edu' },
  { id: 'udc', name: 'University of the District of Columbia', satMath: 500, state: 'DC', logo: 'https://logo.clearbit.com/udc.edu' },

  // More Delaware Schools
  { id: 'dsu-de', name: 'Delaware State University', satMath: 520, state: 'DE', logo: 'https://logo.clearbit.com/desu.edu' },
  { id: 'wesley', name: 'Wesley College', satMath: 510, state: 'DE', logo: 'https://logo.clearbit.com/wesley.edu' },
  { id: 'wilmington-de', name: 'Wilmington University', satMath: 530, state: 'DE', logo: 'https://logo.clearbit.com/wilmu.edu' },

  // More Rhode Island Schools
  { id: 'ric', name: 'Rhode Island College', satMath: 550, state: 'RI', logo: 'https://logo.clearbit.com/ric.edu' },
  { id: 'bryant', name: 'Bryant University', satMath: 640, state: 'RI', logo: 'https://logo.clearbit.com/bryant.edu' },
  { id: 'roger-williams', name: 'Roger Williams University', satMath: 590, state: 'RI', logo: 'https://logo.clearbit.com/rwu.edu' },
  { id: 'salve-regina', name: 'Salve Regina University', satMath: 580, state: 'RI', logo: 'https://logo.clearbit.com/salve.edu' },

  // More New Hampshire Schools
  { id: 'plymouth', name: 'Plymouth State University', satMath: 540, state: 'NH', logo: 'https://logo.clearbit.com/plymouth.edu' },
  { id: 'keene', name: 'Keene State College', satMath: 530, state: 'NH', logo: 'https://logo.clearbit.com/keene.edu' },
  { id: 'snhu', name: 'Southern New Hampshire University', satMath: 550, state: 'NH', logo: 'https://logo.clearbit.com/snhu.edu' },
  { id: 'st-anselm', name: 'Saint Anselm College', satMath: 610, state: 'NH', logo: 'https://logo.clearbit.com/anselm.edu' },
  { id: 'colby-sawyer', name: 'Colby-Sawyer College', satMath: 560, state: 'NH', logo: 'https://logo.clearbit.com/colby-sawyer.edu' },
  { id: 'new-england', name: 'New England College', satMath: 530, state: 'NH', logo: 'https://logo.clearbit.com/nec.edu' },
  { id: 'franklin-pierce', name: 'Franklin Pierce University', satMath: 540, state: 'NH', logo: 'https://logo.clearbit.com/franklinpierce.edu' },

  // More Vermont Schools
  { id: 'champlain', name: 'Champlain College', satMath: 600, state: 'VT', logo: 'https://logo.clearbit.com/champlain.edu' },
  { id: 'norwich', name: 'Norwich University', satMath: 580, state: 'VT', logo: 'https://logo.clearbit.com/norwich.edu' },
  { id: 'st-michaels', name: 'Saint Michael\'s College', satMath: 600, state: 'VT', logo: 'https://logo.clearbit.com/smcvt.edu' },
  { id: 'vermont-state', name: 'Vermont State University', satMath: 540, state: 'VT', logo: 'https://logo.clearbit.com/vtc.edu' },
  { id: 'bennington', name: 'Bennington College', satMath: 640, state: 'VT', logo: 'https://logo.clearbit.com/bennington.edu' },

  // More Maine Schools
  { id: 'usm', name: 'University of Southern Maine', satMath: 560, state: 'ME', logo: 'https://logo.clearbit.com/usm.maine.edu' },
  { id: 'umfk', name: 'University of Maine Fort Kent', satMath: 510, state: 'ME', logo: 'https://logo.clearbit.com/umfk.edu' },
  { id: 'umpi', name: 'University of Maine Presque Isle', satMath: 500, state: 'ME', logo: 'https://logo.clearbit.com/umpi.edu' },
  { id: 'uma', name: 'University of Maine Augusta', satMath: 510, state: 'ME', logo: 'https://logo.clearbit.com/uma.edu' },
  { id: 'umm', name: 'University of Maine Machias', satMath: 510, state: 'ME', logo: 'https://logo.clearbit.com/machias.edu' },
  { id: 'husson', name: 'Husson University', satMath: 550, state: 'ME', logo: 'https://logo.clearbit.com/husson.edu' },
  { id: 'une', name: 'University of New England', satMath: 580, state: 'ME', logo: 'https://logo.clearbit.com/une.edu' },
  { id: 'thomas', name: 'Thomas College', satMath: 520, state: 'ME', logo: 'https://logo.clearbit.com/thomas.edu' },
  { id: 'st-josephs-me', name: 'Saint Joseph\'s College of Maine', satMath: 540, state: 'ME', logo: 'https://logo.clearbit.com/sjcme.edu' },

  // More Washington State Schools
  { id: 'western-washington', name: 'Western Washington University', satMath: 620, state: 'WA', logo: 'https://logo.clearbit.com/wwu.edu' },
  { id: 'central-washington', name: 'Central Washington University', satMath: 560, state: 'WA', logo: 'https://logo.clearbit.com/cwu.edu' },
  { id: 'eastern-washington', name: 'Eastern Washington University', satMath: 550, state: 'WA', logo: 'https://logo.clearbit.com/ewu.edu' },
  { id: 'evergreen', name: 'The Evergreen State College', satMath: 580, state: 'WA', logo: 'https://logo.clearbit.com/evergreen.edu' },
  { id: 'pacific-lutheran', name: 'Pacific Lutheran University', satMath: 600, state: 'WA', logo: 'https://logo.clearbit.com/plu.edu' },
  { id: 'whitman', name: 'Whitman College', satMath: 700, state: 'WA', logo: 'https://logo.clearbit.com/whitman.edu' },
  { id: 'whitworth', name: 'Whitworth University', satMath: 620, state: 'WA', logo: 'https://logo.clearbit.com/whitworth.edu' },
  { id: 'puget-sound', name: 'University of Puget Sound', satMath: 660, state: 'WA', logo: 'https://logo.clearbit.com/pugetsound.edu' },
  { id: 'spx', name: 'Saint Martin\'s University', satMath: 570, state: 'WA', logo: 'https://logo.clearbit.com/stmartin.edu' },

  // More Oregon Schools
  { id: 'portland-state', name: 'Portland State University', satMath: 580, state: 'OR', logo: 'https://logo.clearbit.com/pdx.edu' },
  { id: 'southern-oregon', name: 'Southern Oregon University', satMath: 560, state: 'OR', logo: 'https://logo.clearbit.com/sou.edu' },
  { id: 'eastern-oregon', name: 'Eastern Oregon University', satMath: 530, state: 'OR', logo: 'https://logo.clearbit.com/eou.edu' },
  { id: 'western-oregon', name: 'Western Oregon University', satMath: 540, state: 'OR', logo: 'https://logo.clearbit.com/wou.edu' },
  { id: 'willamette', name: 'Willamette University', satMath: 640, state: 'OR', logo: 'https://logo.clearbit.com/willamette.edu' },
  { id: 'reed', name: 'Reed College', satMath: 720, state: 'OR', logo: 'https://logo.clearbit.com/reed.edu' },
  { id: 'lewis-clark', name: 'Lewis & Clark College', satMath: 660, state: 'OR', logo: 'https://logo.clearbit.com/lclark.edu' },
  { id: 'linfield', name: 'Linfield University', satMath: 590, state: 'OR', logo: 'https://logo.clearbit.com/linfield.edu' },
  { id: 'pacific-or', name: 'Pacific University (Oregon)', satMath: 580, state: 'OR', logo: 'https://logo.clearbit.com/pacificu.edu' },
  { id: 'george-fox', name: 'George Fox University', satMath: 590, state: 'OR', logo: 'https://logo.clearbit.com/georgefox.edu' },
];

// Helper function to get college by ID
export const getCollegeById = (id) => collegeData.find(c => c.id === id);

// Helper function to search colleges by name
export const searchColleges = (query) => {
  const lowerQuery = query.toLowerCase();
  return collegeData.filter(c =>
    c.name.toLowerCase().includes(lowerQuery) ||
    c.state.toLowerCase().includes(lowerQuery)
  );
};

// Helper function to get colleges by state
export const getCollegesByState = (state) =>
  collegeData.filter(c => c.state === state);

// Helper function to get colleges by score range
export const getCollegesByScoreRange = (minScore, maxScore) =>
  collegeData.filter(c => c.satMath >= minScore && c.satMath <= maxScore);

// Get score tiers for display
export const scoreTiers = [
  { label: 'Elite (770-800)', min: 770, max: 800 },
  { label: 'Highly Selective (740-769)', min: 740, max: 769 },
  { label: 'Selective (700-739)', min: 700, max: 739 },
  { label: 'Competitive (650-699)', min: 650, max: 699 },
  { label: 'Accessible (550-649)', min: 550, max: 649 },
];

// Calculate median of an array of numbers
export const calculateMedian = (scores) => {
  if (!scores || scores.length === 0) return 0;
  const sorted = [...scores].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return Math.round((sorted[mid - 1] + sorted[mid]) / 2);
  }
  return sorted[mid];
};

export default collegeData;
