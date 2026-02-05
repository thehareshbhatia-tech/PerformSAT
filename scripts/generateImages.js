/**
 * Gemini Image Generation Script for Practice Test 2
 *
 * Usage:
 *   GEMINI_API_KEY=your_key_here node scripts/generateImages.js
 *
 * Or create a .env file with GEMINI_API_KEY=your_key_here
 */

const fs = require('fs');
const path = require('path');

// Load .env or .env.local file if it exists
const loadEnvFile = (filename) => {
  const envPath = path.join(__dirname, '..', filename);
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split('=');
      if (key && valueParts.length) {
        process.env[key.trim()] = valueParts.join('=').trim();
      }
    });
    return true;
  }
  return false;
};

// Try .env.local first, then .env
loadEnvFile('.env.local') || loadEnvFile('.env');

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.error('Error: GEMINI_API_KEY not found');
  console.error('Set it via: GEMINI_API_KEY=your_key node scripts/generateImages.js');
  console.error('Or add GEMINI_API_KEY=your_key to a .env file in the project root');
  process.exit(1);
}

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'questions', 'practiceTest2');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Image generation prompts
const imagePrompts = [
  {
    filename: 'm1_q8.png',
    prompt: `Create a clean SAT math test style coordinate plane graph showing a linear function g(x).

Requirements:
- Standard xy-coordinate grid with x-axis from -1 to 5 and y-axis from -1 to 12
- Clear tick marks at every integer with number labels at 0, 2, 4 on x-axis and 0, 4, 8, 12 on y-axis
- Draw a straight line that passes through points (0, 4) and (2, 8) - this is g(x) = 2x + 4
- The line should extend beyond these points to edges of the graph
- Label the line "y = g(x)" in italic serif font
- Label axes with "x" and "y" in italic
- Use black lines on white/light gray background
- Professional, clean SAT standardized test appearance
- No grid shading, just clean axis lines and tick marks`
  },
  {
    filename: 'm1_q13.png',
    prompt: `Create a clean SAT math test style coordinate plane graph showing a wavy polynomial function y = f(x).

Requirements:
- Standard xy-coordinate grid with x-axis from -4 to 6 and y-axis from -1 to 5
- Clear tick marks at integers with labels
- Draw a smooth curve that crosses the horizontal line y = 2.5 exactly THREE times
- The curve should look like a cubic function with:
  - A local maximum around (0, 4)
  - A local minimum around (3, 1)
  - Crossing y = 2.5 at approximately x = -2, x = 1.5, and x = 4.5
- Label the curve "y = f(x)" in italic serif font
- Label axes with "x" and "y" in italic
- Black lines on white/light background
- Professional SAT test appearance`
  },
  {
    filename: 'm1_q16.png',
    prompt: `Create a clean SAT math test style coordinate plane graph showing a function y = f(x).

Requirements:
- Standard xy-coordinate grid with x-axis from -3 to 4 and y-axis from -4 to 6
- Clear tick marks at integers with labels
- Draw a piecewise linear or curved function where:
  - f(0) = 3 (the function passes through point (0, 3))
  - f(1) = -2 (the function passes through point (1, -2))
- Mark these two points with small solid dots
- The function should be continuous and clearly visible
- Label the curve "y = f(x)" in italic serif font
- Label axes with "x" and "y" in italic
- Black lines on white/light background
- Professional SAT test appearance`
  },
  {
    filename: 'm1_q20.png',
    prompt: `Create two SAT math test style dot plots stacked vertically.

Requirements:
- Title "Set 1" above the top dot plot
- Title "Set 2" above the bottom dot plot
- Both plots share the same horizontal number line from 1 to 9
- Clear number labels below each plot

Set 1 (top plot) - centered around value 4:
- 1 dot at value 2
- 2 dots at value 3
- 3 dots at value 4
- 2 dots at value 5
- 1 dot at value 6

Set 2 (bottom plot) - same shape but shifted right, centered around value 6:
- 1 dot at value 4
- 2 dots at value 5
- 3 dots at value 6
- 2 dots at value 7
- 1 dot at value 8

Key: Both sets have the SAME spread/shape (equal standard deviations) but Set 2 is shifted to higher values (higher mean).
Use solid black dots, clean white background, professional SAT test style.`
  },
  {
    filename: 'm2_q18.png',
    prompt: `Create two SAT math test style dot plots stacked vertically.

Requirements:
- Title "Data Set J" above the top dot plot
- Title "Data Set K" above the bottom dot plot
- Both plots share the same horizontal number line from 1 to 11
- Clear number labels below each plot

Data Set J (top plot) - WIDELY spread around center value 6:
- 1 dot at value 2
- 1 dot at value 3
- 1 dot at value 4
- 2 dots at value 5
- 2 dots at value 6
- 2 dots at value 7
- 1 dot at value 8
- 1 dot at value 9
- 1 dot at value 10

Data Set K (bottom plot) - TIGHTLY clustered around the same center value 6:
- 2 dots at value 5
- 4 dots at value 6
- 2 dots at value 7

Key: Both sets have the SAME center/mean (value 6), but Set J is much MORE SPREAD OUT than Set K (J has higher standard deviation).
Use solid black dots, clean white background, professional SAT test style.`
  }
];

async function generateImage(prompt, filename) {
  console.log(`\nGenerating: ${filename}...`);

  try {
    // Using Gemini 2.0 Flash with image generation
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp-image-generation:generateContent?key=${API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }],
          generationConfig: {
            responseModalities: ["TEXT", "IMAGE"]
          }
        })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API error ${response.status}: ${errorText}`);
    }

    const data = await response.json();

    // Extract image from response
    const parts = data.candidates?.[0]?.content?.parts || [];
    const imagePart = parts.find(p => p.inlineData?.mimeType?.startsWith('image/'));

    if (!imagePart) {
      console.log('Response:', JSON.stringify(data, null, 2));
      throw new Error('No image in response');
    }

    // Save the image
    const imageData = imagePart.inlineData.data;
    const outputPath = path.join(OUTPUT_DIR, filename);
    fs.writeFileSync(outputPath, Buffer.from(imageData, 'base64'));

    console.log(`✓ Saved: ${outputPath}`);
    return true;
  } catch (error) {
    console.error(`✗ Failed: ${filename} - ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('='.repeat(50));
  console.log('Gemini Image Generation for Practice Test 2');
  console.log('='.repeat(50));
  console.log(`Output directory: ${OUTPUT_DIR}`);
  console.log(`Images to generate: ${imagePrompts.length}`);

  let successCount = 0;
  let failCount = 0;

  for (const { filename, prompt } of imagePrompts) {
    const success = await generateImage(prompt, filename);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
    // Small delay between requests to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  console.log('\n' + '='.repeat(50));
  console.log(`Complete! Success: ${successCount}, Failed: ${failCount}`);
  console.log('='.repeat(50));

  if (failCount > 0) {
    console.log('\nTo retry failed images, run the script again.');
    console.log('Already generated images will be overwritten.');
  }
}

main().catch(console.error);
