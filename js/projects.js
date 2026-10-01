/* =============================================================
   PROJECTS
   -------------------------------------------------------------
   This is the only file you need to edit to add a project.
   Copy one { ... } block, paste it at the top of the list
   (newest first) and change the values.

   id           unique, lowercase, no spaces – used in the URL
   title        shown on the card and the project page
   type         "machine", "software" or "carpentry" (used by the filter)
   year         optional
   tags         optional – materials, parts, languages, tools…
   cover        the main picture, shown large on the project page
   thumb        optional – a small version of the cover (800 px wide)
                for the overview, so it loads fast. Without it the
                cover is used.
   images       optional – more pictures for the project page.
                Either "path/to/img.jpg" or
                { src: "path/to/img.jpg", caption: "Some text" }
   description  the text on the project page. HTML is allowed:
                <p>, <h3>, <ul><li>, <a href="…">, <strong> …
   links        optional – e.g. GitHub, video, download

   Put your pictures in  img/projects/<id>/
   Resize photos to about 1600 px and remove location (GPS) data
   before adding them. No photo yet? Use img/placeholder-*.svg.
   ============================================================= */

const PROJECTS = [
  {
    id: "alibaba-as02mc04",
    title: "Alibaba AS02MC04",
    type: "software",
    year: 2026,
    tags: ["FPGA", "Kintex UltraScale+", "Vivado", "OpenOCD", "JTAG"],
    cover: "img/projects/alibaba-as02mc04/cover.jpg",
    thumb: "img/projects/alibaba-as02mc04/thumb.jpg",
    images: [
      { src: "img/projects/alibaba-as02mc04/1.jpg", caption: "The bare board" },
    ],
    description: `
      <p>The AS02MC04 is a network card from Alibaba with two SFP ports, built
      around a Xilinx Kintex UltraScale+ FPGA. This project documents the board
      and provides the files needed to use it in AMD/Xilinx Vivado and to
      program the FPGA over JTAG.</p>
      <ul>
        <li>FPGA: XCKU3P-FFVB676-2-E</li>
        <li>Host interface: PCI Express, up to x8</li>
        <li>Network: 2× SFP</li>
        <li>Also on the board: two I2C EEPROMs, seven user LEDs, a reset button</li>
      </ul>
      <h3>What's in the repository</h3>
      <p>Pin constraints for Vivado, OpenOCD configurations for programming the
      FPGA with a CH347-based JTAG adapter, and a configuration for reading the
      FPGA's temperature and supply voltages.</p>
      <p>The project builds on the reverse-engineering work of
      <a href="https://www.tiferking.cn/index.php/2025/01/06/721/" target="_blank" rel="noopener">TiferKing</a> and
      <a href="https://essenceia.github.io/projects/alibaba_cloud_fpga/" target="_blank" rel="noopener">Julia Desmazes</a>.</p>
    `,
    links: [
      { label: "Source on GitHub", url: "https://github.com/Cupiad/Alibaba-AS02MC04" },
    ],
  },
  {
    id: "stepcraft-cnc",
    title: "Stepcraft CNC",
    type: "machine",
    year: 2026,
    tags: ["Stepcraft D.420", "JMC closed-loop motors"],
    cover: "img/projects/stepcraft-cnc/cover.jpg",
    thumb: "img/projects/stepcraft-cnc/thumb.jpg",
    images: [
      { src: "img/projects/stepcraft-cnc/1.jpg", caption: "JMC closed-loop motor" },
      { src: "img/projects/stepcraft-cnc/2.jpg", caption: "Wires soldered to the control board" },
    ],
    description: `
      <p>A Stepcraft D.420 CNC machine that I converted to JMC closed-loop motors.</p>
    `,
  },
  {
    id: "grain-dryer",
    title: "Grain Dryer Control",
    type: "machine",
    year: 2026,
    tags: ["Siemens SIMATIC S7-1200", "PLC"],
    cover: "img/projects/grain-dryer/cover.jpg",
    thumb: "img/projects/grain-dryer/thumb.jpg",
    images: [
      { src: "img/projects/grain-dryer/1.jpg", caption: "The Siemens S7-1200 controller" },
      { src: "img/projects/grain-dryer/2.jpg", caption: "Main menu on the touch panel" },
      { src: "img/projects/grain-dryer/3.jpg", caption: "Drying and cooling modes on the touch panel" },
    ],
    description: `
      <p>I reprogrammed the Siemens SIMATIC S7-1200 controller (PLC) of a grain dryer.</p>
    `,
  },
  {
    id: "invoicing-program",
    title: "Invoicing Program",
    type: "software",
    year: 2026,
    tags: ["Python", "Flask"],
    cover: "img/projects/invoicing-program/cover.png",
    description: `
      <p>A program for creating invoices and delivery notes, with a Flask backend.</p>
      <ul>
        <li>Parcel shipping with Hermes</li>
        <li>Address book for customers, both companies and private individuals</li>
      </ul>
    `,
  },
  {
    id: "vinegar-machine",
    title: "Vinegar Machine",
    type: "machine",
    year: 2025,
    tags: ["Stainless steel", "Centrifugal pump", "Venturi nozzle"],
    cover: "img/projects/vinegar-machine/cover.jpg",
    thumb: "img/projects/vinegar-machine/thumb.jpg",
    images: [
      { src: "img/projects/vinegar-machine/1.jpg", caption: "The centrifugal pump" },
      "img/projects/vinegar-machine/2.jpg",
    ],
    description: `
      <p>A machine for making vinegar, built around a stainless steel tank.</p>
      <ul>
        <li>A centrifugal pump circulates the vinegar</li>
        <li>A Venturi nozzle mixes oxygen into the vinegar</li>
        <li>A cooling and heating system</li>
      </ul>
    `,
  },
  {
    id: "barn-curtain",
    title: "Barn Curtain Repair",
    type: "machine",
    year: 2025,
    tags: ["Motor", "PCB repair"],
    cover: "img/projects/barn-curtain/cover.jpg",
    thumb: "img/projects/barn-curtain/thumb.jpg",
    images: [
      "img/projects/barn-curtain/1.jpg",
    ],
    description: `
      <p>Repair of the curtain system of a livestock barn: I fitted a new motor
      and repaired the circuit board.</p>
    `,
  },
  {
    id: "riscv-fpga-vga",
    title: "RISC-V on FPGA with VGA",
    type: "software",
    year: 2025,
    tags: ["RISC-V", "FPGA", "VGA", "Arty S7-25"],
    cover: "img/projects/riscv-fpga-vga/cover.jpg",
    thumb: "img/projects/riscv-fpga-vga/thumb.jpg",
    images: [
      { src: "img/projects/riscv-fpga-vga/1.jpg", caption: "Program counter, instruction and registers on the monitor" },
    ],
    description: `
      <p>My seminar project: a 32-bit RISC-V processor running on an FPGA. The
      processor was provided to me by the Institute for Complex Systems at JKU.</p>
      <p>I expanded it to support the M extension (multiplication and division)
      and changed it so that it is compatible with my FPGA, an Arty S7-25 from
      Digilent, and runs on it.</p>
      <p>The FPGA shows its registers, the program counter and the instructions
      on a monitor over VGA. To generate the text I use the library by
      Derek-X-Wang.</p>
    `,
  },
  {
    id: "home-network",
    title: "Home Network",
    type: "software",
    tags: ["UniFi Dream Machine", "PoE", "QNAP", "Legrand"],
    cover: "img/projects/home-network/cover.jpg",
    thumb: "img/projects/home-network/thumb.jpg",
    images: [
      "img/projects/home-network/1.jpg",
    ],
    description: `
      <p>My network at home. It consists of:</p>
      <ul>
        <li>a UniFi Dream Machine</li>
        <li>a 16-port PoE switch</li>
        <li>a QNAP TS-435XeU NAS</li>
        <li>a Legrand 800 PDU</li>
      </ul>
    `,
  },
  {
    id: "potato-steamer",
    title: "Potato Steamer",
    type: "machine",
    year: 2023,
    tags: ["Stainless steel", "TIG welding", "9 kW heating element"],
    cover: "img/projects/potato-steamer/cover.jpg",
    thumb: "img/projects/potato-steamer/thumb.jpg",
    images: [
      { src: "img/projects/potato-steamer/1.jpg", caption: "The rolled shell with its welded seam" },
      "img/projects/potato-steamer/2.jpg",
      "img/projects/potato-steamer/3.jpg",
      { src: "img/projects/potato-steamer/4.jpg", caption: "The frame" },
      "img/projects/potato-steamer/5.jpg",
    ],
    description: `
      <p>A potato steamer made of TIG-welded stainless steel, heated by a
      9 kW heating element.</p>
    `,
  },
  {
    id: "mixer",
    title: "Large Mixer",
    type: "machine",
    year: 2023,
    cover: "img/projects/mixer/cover.jpg",
    thumb: "img/projects/mixer/thumb.jpg",
    description: `
      <p>A large mixer for mixing sugar water, or anything else that needs mixing.</p>
    `,
  },
  {
    id: "bee-house",
    title: "Bee House",
    type: "carpentry",
    year: 2023,
    cover: "img/projects/bee-house/cover.jpg",
    thumb: "img/projects/bee-house/thumb.jpg",
    images: [
      { src: "img/projects/bee-house/1.jpg", caption: "The timber laid out before assembly, seen from a drone" },
      "img/projects/bee-house/2.jpg",
      "img/projects/bee-house/3.jpg",
      "img/projects/bee-house/4.jpg",
      "img/projects/bee-house/5.jpg",
      "img/projects/bee-house/6.jpg",
      "img/projects/bee-house/7.jpg",
    ],
    description: `
      <p>A storage building, built on top of the machinery shed.</p>
    `,
  },
  {
    id: "barn-bracing",
    title: "Barn Bracing and Loft Removal",
    type: "carpentry",
    year: 2022,
    cover: "img/projects/barn-bracing/cover.jpg",
    thumb: "img/projects/barn-bracing/thumb.jpg",
    images: [
      "img/projects/barn-bracing/1.jpg",
      "img/projects/barn-bracing/2.jpg",
    ],
    description: `
      <p>I rebuilt the structure of the barn so that the hay loft could be
      removed: the tie beams were replaced with braces on the sides, which now
      stiffen the barn.</p>
    `,
  },
  {
    id: "tree-house",
    title: "Tree House",
    type: "carpentry",
    year: 2020,
    cover: "img/projects/tree-house/cover.jpg",
    thumb: "img/projects/tree-house/thumb.jpg",
    images: [
      "img/projects/tree-house/1.jpg",
      "img/projects/tree-house/2.jpg",
      "img/projects/tree-house/3.jpg",
      { src: "img/projects/tree-house/4.jpg", caption: "The trunk passing through the roof" },
    ],
    description: `
      <p>A tree house built without harming the tree. It stands on its own
      around the tree, and the tree only steadies it so that it can't tip over.</p>
    `,
  },
];
