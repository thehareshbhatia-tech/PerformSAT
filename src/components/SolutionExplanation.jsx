import React, { useState, useMemo } from 'react';
import { MathText } from './MathText';
import { colors, typography, radius, shadows } from '../design/tokens';

// ═══════════════════════════════════════════════════════════════════════════════
// MATH PREPROCESSOR — \div and ÷ → \frac{}{}
// ═══════════════════════════════════════════════════════════════════════════════

function grabLeft(s,p){let i=p-1;while(i>=0&&s[i]===' ')i--;if(i<0)return{start:p,text:''};if(s[i]==='}'){let d=1;i--;while(i>=0&&d>0){if(s[i]==='}')d++;if(s[i]==='{')d--;i--;}if(i>=0&&s[i]==='}'){let d2=1;i--;while(i>=0&&d2>0){if(s[i]==='}')d2++;if(s[i]==='{')d2--;i--;}}if(i>=0){let ce=i;while(i>=0&&/[a-zA-Z]/.test(s[i]))i--;if(i>=0&&s[i]==='\\')return{start:i,text:s.substring(i,p).trim()};i=ce;}return{start:i+1,text:s.substring(i+1,p).trim()};}if(s[i]===')'){let d=1;i--;while(i>=0&&d>0){if(s[i]===')')d++;if(s[i]==='(')d--;i--;}return{start:i,text:s.substring(i,p).trim()};}if(/[\d.,}]/.test(s[i])){let e=i+1;while(i>=0&&/[\d.,{}]/.test(s[i]))i--;if(i>=0&&s[i]==='-')i--;return{start:i+1,text:s.substring(i+1,e).trim()};}if(/[a-zA-Z]/.test(s[i])){let e=i+1;while(i>=0&&/[a-zA-Z]/.test(s[i]))i--;if(i>=0&&s[i]==='\\')i--;return{start:i+1,text:s.substring(i+1,e).trim()};}return{start:i,text:s[i]};}

function grabRight(s,p){let i=p;while(i<s.length&&s[i]===' ')i++;if(i>=s.length)return{end:p,text:''};if(s[i]==='\\'){let j=i+1;if(j<s.length&&s[j]==='$'){j++;while(j<s.length&&/[\d.,]/.test(s[j]))j++;return{end:j,text:s.substring(i,j)};}while(j<s.length&&/[a-zA-Z]/.test(s[j]))j++;const cmd=s.substring(i,j);const g=cmd==='\\frac'?2:['\\sqrt','\\text','\\overline'].includes(cmd)?1:0;for(let k=0;k<g;k++){while(j<s.length&&s[j]===' ')j++;if(j<s.length&&s[j]==='{'){let d=1;j++;while(j<s.length&&d>0){if(s[j]==='{')d++;if(s[j]==='}')d--;j++;}}}return{end:j,text:s.substring(i,j)};}if(s[i]==='{'){let d=1,j=i+1;while(j<s.length&&d>0){if(s[j]==='{')d++;if(s[j]==='}')d--;j++;}return{end:j,text:s.substring(i,j)};}if(s[i]==='('){let d=1,j=i+1;while(j<s.length&&d>0){if(s[j]==='(')d++;if(s[j]===')')d--;j++;}if(j<s.length&&s[j]==='^'){j++;if(j<s.length&&s[j]==='{'){let d2=1;j++;while(j<s.length&&d2>0){if(s[j]==='{')d2++;if(s[j]==='}')d2--;j++;}}else if(j<s.length)j++;}return{end:j,text:s.substring(i,j)};}if(/[\d\-]/.test(s[i])){let j=i;if(s[j]==='-')j++;while(j<s.length&&/[\d.,{}]/.test(s[j]))j++;if(j<s.length&&s[j]==='^'){j++;if(j<s.length&&s[j]==='{'){let d=1;j++;while(j<s.length&&d>0){if(s[j]==='{')d++;if(s[j]==='}')d--;j++;}}else if(j<s.length)j++;}return{end:j,text:s.substring(i,j)};}if(/[a-zA-Z]/.test(s[i])){let j=i;while(j<s.length&&/[a-zA-Z]/.test(s[j]))j++;if(j<s.length&&s[j]==='^'){j++;if(j<s.length&&s[j]==='{'){let d=1;j++;while(j<s.length&&d>0){if(s[j]==='{')d++;if(s[j]==='}')d--;j++;}}else if(j<s.length)j++;}return{end:j,text:s.substring(i,j)};}return{end:i+1,text:s[i]};}

function convertLatexDiv(l){if(!l.includes('\\div'))return l;let r=l,n=0;while(r.includes('\\div')&&n++<20){const i=r.indexOf('\\div');const L=grabLeft(r,i),R=grabRight(r,i+4);if(!L.text||!R.text)break;r=r.substring(0,L.start)+'\\frac{'+L.text+'}{'+R.text+'}'+r.substring(R.end);}return r;}

function convertSlashDiv(l){if(!l.includes('/'))return l;let r=l,n=0;while(r.includes('/')&&n++<30){const i=r.indexOf('/');if(i>0&&r[i-1]==='\\'){r=r.substring(0,i)+'\x00'+r.substring(i+1);continue;}const L=grabLeft(r,i),R=grabRight(r,i+1);if(!L.text||!R.text){r=r.substring(0,i)+'\x00'+r.substring(i+1);continue;}r=r.substring(0,L.start)+'\\frac{'+L.text+'}{'+R.text+'}'+r.substring(R.end);}return r.replace(/\x00/g,'/');}

function convertPlainDiv(t){if(!t.includes('÷'))return t;return t.replace(/(\()?(\\\$)?(\d[\d,.]*)\s*÷\s*(\\\$)?(\d[\d,.]*)\)?/g,(m,p,c1,n,c2,d)=>{const fN=(c1||'')+n.replace(/,/g,'{,}'),fD=(c2||'')+d.replace(/,/g,'{,}');return p?'$\\left(\\frac{'+fN+'}{'+fD+'}\\right)$':'$\\frac{'+fN+'}{'+fD+'}$';});}

function convertPlainSlash(t){if(!t.includes('/'))return t;const parts=[];let last=0;const re=/\$\$[\s\S]*?\$\$|\$[^$]+?\$/g;let m;while((m=re.exec(t))!==null){if(m.index>last)parts.push(cvtSlash(t.substring(last,m.index)));parts.push(m[0]);last=m.index+m[0].length;}if(last<t.length)parts.push(cvtSlash(t.substring(last)));return parts.join('');}
function cvtSlash(s){s=s.replace(/\(([^)]+)\)\s*\/\s*(\d[\d,.]*)/g,(m,n,d)=>'$\\frac{'+n+'}{'+d+'}$');s=s.replace(/(\d[\d,.]*)\s*\/\s*\(([^)]+)\)/g,(m,n,d)=>'$\\frac{'+n+'}{'+d+'}$');s=s.replace(/(\d[\d,.]*)\s*\/\s*(\d[\d,.]*)/g,(m,n,d)=>'$\\frac{'+n+'}{'+d+'}$');return s;}

function preprocessMath(t){if(!t)return t;let r=t;r=r.replace(/\$\\div\$/g,'÷');r=r.replace(/\$\$([\s\S]*?)\$\$/g,(m,l)=>'$$'+convertSlashDiv(convertLatexDiv(l))+'$$');r=r.replace(/\$([^\$]+?)\$/g,(m,l)=>'$'+convertSlashDiv(convertLatexDiv(l))+'$');r=convertPlainDiv(r);r=convertPlainSlash(r);return r;}

// ═══════════════════════════════════════════════════════════════════════════════
// PARSER
// ═══════════════════════════════════════════════════════════════════════════════

function parseExplanation(raw){
  const text=preprocessMath(raw);
  if(!text)return{answer:'',answerDetail:'',equation:null,sections:[]};
  const lines=text.split('\n'),sections=[];
  let answer='',answerDetail='',cur=null,stepN=0,equation=null;

  const flush=()=>{if(cur){cur.content=cur.content.trim();if(cur.content||cur.bullets.length)sections.push({...cur});}cur=null;};
  const make=(type,extra={})=>{flush();cur={type,content:'',bullets:[],...extra};};

  const extractEq=(str)=>{
    if(equation)return;
    const m2=str.match(/\$\$(.+?)\$\$/);
    if(m2){equation='$$'+m2[1]+'$$';return;}
    const all=[...str.matchAll(/\$([^$]+?)\$/g)];
    for(const a of all){if(/[=\\]/.test(a[1])&&a[1].length>3){equation='$'+a[1]+'$';return;}}
  };

  for(const line of lines){
    const t=line.trim();if(!t)continue;let m;
    if((m=t.match(/^\*\*(?:Choice ([A-D]) is correct\.?|The correct answer is (.+?)\.?)\*\*(.*)$/))&&!answer){answer=m[1]?'Choice '+m[1]+' is correct':'The correct answer is '+m[2];answerDetail=(m[3]||'').trim();continue;}
    if((m=t.match(/^\*\*Step (\d+)[:.]\*\*\s*(.*)$/))){stepN=+m[1];make('step',{number:stepN,title:m[2]});continue;}
    if((m=t.match(/^\*\*Method (\d+)[:.]\*\*\s*(.*)$/))){make('method',{number:+m[1],title:m[2]});continue;}
    if((m=t.match(/^\*\*Case (\d+)[:.]\*\*\s*(.*)$/))){make('case',{number:+m[1],title:m[2]});continue;}
    if(/^\*\*Why (?:other )?choices/.test(t)||/^\*\*Why simple average/.test(t)){make('why-wrong');continue;}
    if((m=t.match(/^\*\*Key (?:concept|insight|rule|principle|identities|ratios):?\*\*\s*(.*)$/i))){extractEq(m[1]||'');make('key-concept',{content:m[1]});continue;}
    if((m=t.match(/^\*\*(?:Key )?[Ff]ormula:?\*\*\s*(.*)$/))){extractEq(m[1]||'');make('formula',{content:m[1]});continue;}
    if((m=t.match(/^\*\*Key rule:?\*\*\s*(.*)$/i))){extractEq(m[1]||'');make('key-concept',{content:m[1]});continue;}
    if((m=t.match(/^\*\*Calculator tip:?\*\*\s*(.*)$/i))){make('calculator-tip',{content:m[1]});continue;}
    if((m=t.match(/^\*\*Verif(?:ication|y)(?:[^:]*)?:?\*\*\s*(.*)$/i))){make('verification',{content:m[1]});continue;}
    if((m=t.match(/^\*\*Note:?\*\*\s*(.*)$/i))){make('note',{content:m[1]});continue;}
    if((m=t.match(/^\*\*Alternative(?:\s+\w+)?(?:\s*\([^)]*\))?:?\*\*\s*(.*)$/i))){make('alternative',{content:m[1]});continue;}
    if((m=t.match(/^\*\*([^*]+?):?\*\*\s*(.*)$/))&&!cur){const h=m[1].trim();if(/^(?:Choice|The correct)/i.test(h))continue;stepN++;make('step',{number:stepN,title:h,content:m[2]});continue;}
    if((m=t.match(/^[•\-–]\s*(.+)$/))&&cur){cur.bullets.push(m[1]);continue;}
    if(cur){cur.content+=(cur.content?'\n':'')+t;}
    else{answerDetail=answerDetail?answerDetail+' '+t:t;}
  }
  flush();

  if(!equation){
    for(const s of sections){
      if(s.type==='formula'||s.type==='key-concept'){
        const c=s.content+' '+(s.bullets||[]).join(' ');
        const m2=c.match(/\$\$(.+?)\$\$/);
        if(m2){equation='$$'+m2[1]+'$$';break;}
        const all=[...c.matchAll(/\$([^$]+?)\$/g)];
        for(const a of all){if(/[=\\]/.test(a[1])&&a[1].length>3){equation='$'+a[1]+'$';break;}}
        if(equation)break;
      }
    }
  }
  return{answer,answerDetail,equation,sections};
}

// ═══════════════════════════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════════════════════════

const strip=t=>(t||'').replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>');

const Lines=({text})=>{
  if(!text)return null;
  const ls=strip(text).split('\n').filter(l=>l.trim());
  return <div style={{fontSize:'15px',color:colors.text.primary,letterSpacing:'-0.01em'}}>
    {ls.map((l,i)=><div key={i} style={{lineHeight:'1.95',marginBottom:'1px'}}><MathText text={l}/></div>)}
  </div>;
};

const Bullets=({items})=>{
  if(!items?.length)return null;
  return <div>{items.map((b,i)=>(
    <div key={i} style={{display:'flex',gap:'8px',marginBottom:'4px',fontSize:'15px',lineHeight:'1.85',color:colors.text.primary}}>
      <span style={{color:colors.text.muted,flexShrink:0,marginTop:'2px',fontSize:'11px'}}>●</span>
      <span style={{flex:1,minWidth:0}}><MathText text={strip(b)}/></span>
    </div>
  ))}</div>;
};

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION RENDERERS
// ═══════════════════════════════════════════════════════════════════════════════

const StepCard=({number,title,content,bullets,isLast})=>(
  <div style={{display:'flex',gap:'20px'}}>
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',flexShrink:0,width:'24px'}}>
      <div style={{width:'24px',height:'24px',borderRadius:'50%',background:colors.surface.gray,color:colors.text.muted,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'12px',fontWeight:'600',flexShrink:0,position:'relative',zIndex:1}}>{number}</div>
      {!isLast&&<div style={{width:'0.5px',flex:1,background:colors.surface.grayMedium,marginTop:'8px'}}/>}
    </div>
    <div style={{flex:1,paddingBottom:isLast?0:'24px',minWidth:0}}>
      {title&&<div style={{fontSize:'14px',fontWeight:'600',color:colors.text.primary,letterSpacing:'-0.01em',lineHeight:'24px',marginBottom:'10px'}}><MathText text={strip(title)}/></div>}
      {content&&<Lines text={content}/>}
      {bullets?.length>0&&<div style={{marginTop:content?'8px':0}}><Bullets items={bullets}/></div>}
    </div>
  </div>
);

const MethodCard=({number,title,content,bullets,label})=>(
  <div style={{background:colors.surface.gray,borderRadius:'14px',overflow:'hidden'}}>
    <div style={{padding:'14px 20px 12px'}}>
      <div style={{fontSize:'10px',fontWeight:'700',color:colors.text.muted,letterSpacing:'0.08em',marginBottom:'10px'}}>{label||'METHOD '+number}{title?' · ':''}{title&&<MathText text={strip(title)}/>}</div>
      <div style={{fontSize:'15px',color:colors.text.primary,letterSpacing:'-0.01em'}}><Lines text={content}/>{bullets?.length>0&&<Bullets items={bullets}/>}</div>
    </div>
  </div>
);

const WhyWrongCard=({bullets,content})=>{
  const[open,setOpen]=useState(false);
  const items=bullets?.length?bullets:content?content.split('\n').filter(l=>l.trim()):[];
  if(!items.length)return null;
  return <div>
    <button onClick={()=>setOpen(v=>!v)} style={{width:'100%',padding:'0 0 8px',background:'none',border:'none',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      <span style={{fontSize:'13px',fontWeight:'500',color:colors.text.muted,letterSpacing:'-0.01em'}}>Why other choices are incorrect</span>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{transform:open?'rotate(180deg)':'rotate(0)',transition:'transform 0.3s cubic-bezier(0.25,0.1,0.25,1)'}}><path d="M3 4.5l3 3 3-3" stroke="#aeaeb2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </button>
    {open&&<div style={{overflow:'hidden'}}>
      {items.map((item,idx)=>{
        const cm=item.match(/^(?:Choice\s+)?([A-D])[\s:(]+(.+?)\)?$/);
        return <div key={idx} style={{display:'flex',gap:'12px',padding:'14px 0',borderBottom:idx<items.length-1?'0.5px solid rgba(0,0,0,0.06)':'none',alignItems:'flex-start'}}>
          {cm?<>
            <div style={{width:'22px',height:'22px',borderRadius:'50%',background:colors.surface.gray,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'11px',fontWeight:'600',color:colors.text.muted,flexShrink:0,marginTop:'2px'}}>{cm[1]}</div>
            <span style={{fontSize:'14px',lineHeight:'1.8',color:colors.text.secondary,flex:1,minWidth:0}}><MathText text={strip(cm[2])}/></span>
          </>:<>
            <span style={{color:colors.text.muted,flexShrink:0,marginTop:'3px',fontSize:'9px'}}>●</span>
            <span style={{fontSize:'14px',lineHeight:'1.8',color:colors.text.secondary,flex:1,minWidth:0}}><MathText text={strip(item)}/></span>
          </>}
        </div>;
      })}
    </div>}
  </div>;
};

const LABELS={'key-concept':'KEY CONCEPT','calculator-tip':'CALCULATOR TIP','verification':'VERIFICATION','note':'NOTE','formula':'FORMULA','alternative':'ALTERNATIVE'};

const CalloutCard=({type,content,bullets})=>(
  <div style={{padding:'18px 22px',background:colors.surface.gray,borderRadius:'14px'}}>
    <div style={{fontSize:'10px',fontWeight:'700',color:colors.text.muted,letterSpacing:'0.08em',marginBottom:'8px'}}>{LABELS[type]||'NOTE'}</div>
    {content&&<div style={{fontSize:'14px',lineHeight:'1.85',color:colors.text.primary,letterSpacing:'-0.01em'}}><MathText text={strip(content)}/></div>}
    {bullets?.length>0&&<div style={{marginTop:content?'6px':0}}><Bullets items={bullets}/></div>}
  </div>
);

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════════════════════════

const SolutionExplanation=({explanation,isCorrect,accentColor})=>{
  const parsed=useMemo(()=>parseExplanation(explanation),[explanation]);

  if(!explanation)return <div style={{padding:'32px',textAlign:'center',color:colors.text.muted,fontSize:'14px'}}>No explanation available.</div>;

  const{answer,answerDetail,equation,sections}=parsed;
  const steps=sections.filter(s=>s.type==='step');
  const methods=sections.filter(s=>s.type==='method');
  const cases=sections.filter(s=>s.type==='case');
  const whyWrong=sections.find(s=>s.type==='why-wrong');
  const calloutTypes=['key-concept','calculator-tip','verification','note','formula','alternative'];
  const callouts=sections.filter(s=>calloutTypes.includes(s.type));
  const hasBody=steps.length||methods.length||cases.length||whyWrong||callouts.length;

  return (
    <div style={{background:colors.surface.white,borderRadius:'20px',overflow:'hidden',boxShadow:'0 0 0 0.5px rgba(0,0,0,0.05),0 2px 8px rgba(0,0,0,0.03),0 12px 36px rgba(0,0,0,0.05)'}}>

      {/* Header */}
      <div style={{padding:'32px 36px 0'}}>
        <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'16px'}}>
          <div style={{width:'8px',height:'8px',borderRadius:'50%',background:colors.semantic.success,flexShrink:0}}/>
          <span style={{fontSize:'12px',fontWeight:'600',color:colors.text.muted,letterSpacing:'0.04em'}}>SOLUTION</span>
        </div>
        <div style={{fontSize:'24px',fontWeight:'600',color:colors.text.primary,letterSpacing:'-0.025em',lineHeight:'1.2'}}>
          {answer?<MathText text={strip(answer)}/>:'Explanation'}
        </div>
        {answerDetail&&<div style={{marginTop:'12px',fontSize:'15px',lineHeight:'1.75',color:colors.text.secondary,letterSpacing:'-0.01em'}}><MathText text={strip(answerDetail)}/></div>}
      </div>

      {/* Equation Used */}
      {equation&&(
        <div style={{margin:'24px 36px 0'}}>
          <div style={{background:colors.surface.gray,borderRadius:'16px',padding:'24px 28px',textAlign:'center'}}>
            <div style={{fontSize:'10px',fontWeight:'700',color:colors.text.muted,letterSpacing:'0.1em',marginBottom:'14px'}}>EQUATION USED</div>
            <div style={{fontSize:'18px',color:colors.text.primary,lineHeight:'2.2'}}><MathText text={strip(equation)}/></div>
          </div>
        </div>
      )}

      {/* Body */}
      {hasBody&&(
        <div style={{padding:'28px 36px 36px'}}>
          {steps.length>0&&<div style={{marginBottom:'4px'}}>{steps.map((s,i)=><StepCard key={i} {...s} isLast={i===steps.length-1}/>)}</div>}

          {methods.length>0&&<div style={{display:'grid',gridTemplateColumns:methods.length===2?'1fr 1fr':'1fr',gap:'12px',marginTop:steps.length?'8px':0}}>{methods.map((m,i)=><MethodCard key={i} {...m}/>)}</div>}

          {cases.length>0&&<div style={{display:'grid',gridTemplateColumns:cases.length===2?'1fr 1fr':'1fr',gap:'12px',marginTop:steps.length?'8px':0}}>{cases.map((c,i)=><MethodCard key={i} {...c} label={'CASE '+c.number}/>)}</div>}

          {(whyWrong||callouts.length>0)&&<div style={{borderTop:'0.5px solid rgba(0,0,0,0.08)',margin:'24px 0 20px'}}/>}

          {whyWrong&&<WhyWrongCard bullets={whyWrong.bullets} content={whyWrong.content}/>}

          {callouts.map((c,i)=><div key={i} style={{marginTop:'16px'}}><CalloutCard type={c.type} content={c.content} bullets={c.bullets}/></div>)}
        </div>
      )}

      {/* Fallback */}
      {!hasBody&&!answerDetail&&<div style={{padding:'0 36px 36px'}}><Lines text={explanation}/></div>}
    </div>
  );
};

export default SolutionExplanation;
