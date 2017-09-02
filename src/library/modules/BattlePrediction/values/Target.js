(function () {
  const createTarget = (side, role, position) => {
    const { validateEnum, battle: { validatePosition }, Side, Role } = KC3BattlePrediction;

    if (!validateEnum(Side, side)) { throw new Error(`Bad side: ${side}`); }
    if (!validateEnum(Role, role)) { throw new Error(`Bad role: ${role}`); }
    if (!validatePosition(position)) { throw new Error(`Bad position: ${position}`); }

    return Object.freeze({ side, role, position });
  };

  // Sanity check position index - should be an integer in range [0,6)
  const validatePosition = (position) => {
    return position >= 0 && position < 6 && position === Math.floor(position);
  };

  Object.assign(window.KC3BattlePrediction.battle, { createTarget, validatePosition });
}());
