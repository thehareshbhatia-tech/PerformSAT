import re

with open('src/App.jsx', 'r') as f:
    content = f.read()

# 1. Find the start and end of the big map function inside renderLessonContent
start_marker = "{currentLesson.content.blocks.map((block, idx) => {"
end_marker = "        })}"

start_idx = content.find(start_marker)
if start_idx == -1:
    print("Start marker not found")
    exit(1)

# Find the matching end_marker after start_marker
end_idx = content.find(end_marker, start_idx) + len(end_marker)

# Extract the big map code
big_map_code = content[start_idx:end_idx]

# 2. Find the newly added renderContentBlocksOnly function
render_blocks_start = content.find("const renderContentBlocksOnly = () => {")
render_blocks_end = content.find("if (loading) {", render_blocks_start)

if render_blocks_start != -1 and render_blocks_end != -1:
    # We want to replace it
    new_func = f"""const renderContentBlocksOnly = () => {{
    if (!currentLesson?.content?.blocks) return null;
    return {big_map_code[1:-1]}; // Remove the wrapping {{ and }}
  }};

  """
    
    new_content = content[:render_blocks_start] + new_func + content[render_blocks_end:]
    
    with open('src/App.jsx', 'w') as f:
        f.write(new_content)
    print("Successfully updated renderContentBlocksOnly")
else:
    print("renderContentBlocksOnly not found")

