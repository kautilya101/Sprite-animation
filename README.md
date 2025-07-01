# SPLMNS Animations

A JavaScript-based project focused on creative and interactive animations.

## Tech Stack

- **JavaScript (ES6+)**
- **HTML5 & CSS3**
- **React**
- **Tailwind**
- **react-sprite-animator**

## 🧭 Functional Flow

This project simulates a **Mage casting magical attacks**, combining sprite animation, user input, and dynamic spell visuals.

### Step-by-Step Flow:

1. **User Input:**
   - The user types a spell or attack name (e.g., `Fireball`, `Lightning`) in the input box.
   - Clicking "Attack" or "Simulate Demo" triggers the spell sequence.

2. **Mage Sprite Animation:**
   - The mage character performs an attack animation using a sprite sheet.
   - This animation is controlled using `react-sprite-animator`.

3. **ThunderBall Spell Animation:**
   - Each valid input creates a `ThunderBall` object — a glowing orb representing the spell.
   - The ThunderBall follows a unique curved path across the screen using `framer-motion` and `offsetPath`.

4. **Cleanup & Reusability:**
   - After the animation finishes, the ThunderBall is removed from the DOM to keep performance smooth.
   - A reset key ensures sprite reanimation for successive attacks.

---

## ✨ Animation Idea & Theme

The design is centered around a **fantasy mage** conjuring spells in a magical environment.

### 🎨 Concept:

- The **Mage** is the focal point, visually reacting to each user-generated attack.
- **ThunderBalls** represent mystical projectiles — each path is random and fluid, giving spells a natural feel.
- The randomness of motion, timing, and glow effects adds a sense of chaos and magic.

### 🌌 Visual Style:

- **Gradient glows and shadows** simulate electric/magic energy around ThunderBalls.
- **Curved trajectories** mimic the erratic path of spells in fantasy settings.
- **Particles** in the background enhance the immersive magical vibe.

---

> Together, these elements create an interactive and animated spell-casting experience that feels alive and magical.
