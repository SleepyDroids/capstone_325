export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <p>
        {/* Dungeons &amp; Dragons and all related marks are &copy; Wizards of the Coast.
        Pathfinder is &copy; Paizo Inc. Character Cubby is a personal, non-commercial
        fan project for organizing your adventuring parties. */}
        A project by{" "}
        <a
          className="footer-link"
          href="https://github.com/SleepyDroids"
          target="_blank"
        >
          SleepyDroids
        </a> &middot; 
         &copy; WoTC &amp; Pathfinder
      </p>
    </footer>
  );
}
