{
  mkShell,
  alejandra,
  bash,
  nodejs,
  pnpm,
}:
mkShell rec {
  name = "comp-4513-asg-1";

  packages = [
    bash
    nodejs

    # Plays nicer with my system
    pnpm

    # Required for CI for format checking.
    alejandra
  ];
}
