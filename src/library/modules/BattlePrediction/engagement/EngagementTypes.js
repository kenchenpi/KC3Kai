(function () {
  const toKey = (player, enemy, time) => `${player}-${enemy}-${time}`;

  /*--------------------------------------------------------*/
  /* ------------[ ENGAGEMENT TYPE FACTORIES ]------------- */
  /*--------------------------------------------------------*/
  const { Player, Enemy, Time } = KC3BattlePrediction;
  const types = {
    [toKey(Player.SINGLE, Enemy.SINGLE, Time.DAY)]() {
      const { Role, bind } = KC3BattlePrediction;
      const {
        kouku: { parseKouku },
        support: { parseSupport },
        hougeki: { parseHougeki },
        raigeki: { parseRaigeki },
      } = KC3BattlePrediction.battle.phases;
      const { create } = KC3BattlePrediction.battle.engagement.parserFactory;

      return {
        airBaseInjection: create('airBaseInjection', parseKouku),
        injectionKouku: create('injectionKouku', parseKouku),
        airBaseAttack: create('airBaseAttack', parseKouku),
        kouku: create('kouku', parseKouku),
        kouku2: create('kouku2', parseKouku),
        support: create('support', parseSupport),
        openingTaisen: create('openingTaisen', bind(parseHougeki, Role.MAIN_FLEET)),
        openingAtack: create('openingAtack', bind(parseRaigeki, Role.MAIN_FLEET)),
        hougeki1: create('hougeki1', bind(parseHougeki, Role.MAIN_FLEET)),
        hougeki2: create('hougeki2', bind(parseHougeki, Role.MAIN_FLEET)),
        hougeki3: create('hougeki3', bind(parseHougeki, Role.MAIN_FLEET)),
        raigeki: create('raigeki', bind(parseRaigeki, Role.MAIN_FLEET)),
      };
    },
    [toKey(Player.CTF, Enemy.SINGLE, Time.DAY)]() {
      const { Role, bind } = KC3BattlePrediction;
      const {
        kouku: { parseKouku },
        support: { parseSupport },
        hougeki: { parseHougeki },
        raigeki: { parseRaigeki },
      } = KC3BattlePrediction.battle.phases;
      const { create } = KC3BattlePrediction.battle.engagement.parserFactory;

      return {
        airBaseInjection: create('airBaseInjection', parseKouku),
        injectionKouku: create('injectionKouku', parseKouku),
        airBaseAttack: create('airBaseAttack', parseKouku),
        kouku: create('kouku', parseKouku),
        kouku2: create('kouku2', parseKouku),
        support: create('support', parseSupport),
        openingTaisen: create('openingTaisen', bind(parseHougeki, Role.ESCORT_FLEET)),
        openingAtack: create('openingAtack', bind(parseRaigeki, Role.ESCORT_FLEET)),
        hougeki1: create('hougeki1', bind(parseHougeki, Role.ESCORT_FLEET)),
        raigeki: create('raigeki', bind(parseRaigeki, Role.ESCORT_FLEET)),
        hougeki2: create('hougeki2', bind(parseHougeki, Role.MAIN_FLEET)),
        hougeki3: create('hougeki3', bind(parseHougeki, Role.MAIN_FLEET)),
      };
    },
    [toKey(Player.STF, Enemy.SINGLE, Time.DAY)]() {
      const { Role, bind } = KC3BattlePrediction;
      const {
        kouku: { parseKouku },
        support: { parseSupport },
        hougeki: { parseHougeki },
        raigeki: { parseRaigeki },
      } = KC3BattlePrediction.battle.phases;
      const { create } = KC3BattlePrediction.battle.engagement.parserFactory;

      return {
        airBaseInjection: create('airBaseInjection', parseKouku),
        injectionKouku: create('injectionKouku', parseKouku),
        airBaseAttack: create('airBaseAttack', parseKouku),
        kouku: create('kouku', parseKouku),
        kouku2: create('kouku2', parseKouku),
        support: create('support', parseSupport),
        openingTaisen: create('openingTaisen', bind(parseHougeki, Role.ESCORT_FLEET)),
        openingAtack: create('openingAtack', bind(parseRaigeki, Role.ESCORT_FLEET)),
        hougeki1: create('hougeki1', bind(parseHougeki, Role.MAIN_FLEET)),
        hougeki2: create('hougeki2', bind(parseHougeki, Role.MAIN_FLEET)),
        hougeki3: create('hougeki3', bind(parseHougeki, Role.ESCORT_FLEET)),
        raigeki: create('raigeki', bind(parseRaigeki, Role.ESCORT_FLEET)),
      };
    },
    [toKey(Player.SINGLE, Enemy.COMBINED, Time.DAY)]() {
      const {
        kouku: { parseKouku },
        support: { parseCombinedSupport },
        hougeki: { parseCombinedHougeki },
        raigeki: { parseCombinedRaigeki },
      } = KC3BattlePrediction.battle.phases;
      const { create } = KC3BattlePrediction.battle.engagement.parserFactory;

      return {
        airBaseInjection: create('airBaseInjection', parseKouku),
        injectionKouku: create('injectionKouku', parseKouku),
        airBaseAttack: create('airBaseAttack', parseKouku),
        kouku: create('kouku', parseKouku),
        kouku2: create('kouku2', parseKouku),
        support: create('support', parseCombinedSupport),
        openingTaisen: create('openingTaisen', parseCombinedHougeki),
        openingAtack: create('openingAtack', parseCombinedRaigeki),
        hougeki1: create('hougeki1', parseCombinedHougeki),
        raigeki: create('raigeki', parseCombinedRaigeki),
        hougeki2: create('hougeki2', parseCombinedHougeki),
        hougeki3: create('hougeki3', parseCombinedHougeki),
      };
    },
    [toKey(Player.CTF, Enemy.COMBINED, Time.DAY)]() {
      const {
        kouku: { parseKouku },
        support: { parseCombinedSupport },
        hougeki: { parseCombinedHougeki },
        raigeki: { parseCombinedRaigeki },
      } = KC3BattlePrediction.battle.phases;
      const { create } = KC3BattlePrediction.battle.engagement.parserFactory;

      return {
        airBaseInjection: create('airBaseInjection', parseKouku),
        injectionKouku: create('injectionKouku', parseKouku),
        airBaseAttack: create('airBaseAttack', parseKouku),
        kouku: create('kouku', parseKouku),
        kouku2: create('kouku2', parseKouku),
        support: create('support', parseCombinedSupport),
        openingTaisen: create('openingTaisen', parseCombinedHougeki),
        openingAtack: create('openingAtack', parseCombinedRaigeki),
        hougeki1: create('hougeki1', parseCombinedHougeki),
        hougeki2: create('hougeki2', parseCombinedHougeki),
        raigeki: create('raigeki', parseCombinedRaigeki),
        hougeki3: create('hougeki3', parseCombinedHougeki),
      };
    },
    [toKey(Player.STF, Enemy.COMBINED, Time.DAY)]() {
      const {
        kouku: { parseKouku },
        support: { parseCombinedSupport },
        hougeki: { parseCombinedHougeki },
        raigeki: { parseCombinedRaigeki },
      } = KC3BattlePrediction.battle.phases;
      const { create } = KC3BattlePrediction.battle.engagement.parserFactory;

      return {
        airBaseInjection: create('airBaseInjection', parseKouku),
        injectionKouku: create('injectionKouku', parseKouku),
        airBaseAttack: create('airBaseAttack', parseKouku),
        kouku: create('kouku', parseKouku),
        kouku2: create('kouku2', parseKouku),
        support: create('support', parseCombinedSupport),
        openingTaisen: create('openingTaisen', parseCombinedHougeki),
        openingAtack: create('openingAtack', parseCombinedRaigeki),
        hougeki1: create('hougeki1', parseCombinedHougeki),
        hougeki2: create('hougeki2', parseCombinedHougeki),
        hougeki3: create('hougeki3', parseCombinedHougeki),
        raigeki: create('raigeki', parseCombinedRaigeki),
      };
    },

    /* -------------------[ NIGHT BATTLE ]------------------- */
    [toKey(Player.SINGLE, Enemy.SINGLE, Time.NIGHT)]() {
      const { Role, bind } = KC3BattlePrediction;
      const { parseYasen } = KC3BattlePrediction.battle.phases.yasen;
      const { create } = KC3BattlePrediction.battle.engagement.parserFactory;

      return {
        hougeki: create('midnight', bind(parseYasen, Role.MAIN_FLEET)),
      };
    },
    [toKey(Player.CTF, Enemy.SINGLE, Time.NIGHT)]() {
      const { Role, bind } = KC3BattlePrediction;
      const { parseYasen } = KC3BattlePrediction.battle.phases.yasen;
      const { create } = KC3BattlePrediction.battle.engagement.parserFactory;

      return {
        hougeki: create('midnight', bind(parseYasen, Role.ESCORT_FLEET)),
      };
    },
    [toKey(Player.STF, Enemy.SINGLE, Time.NIGHT)]() {
      const { Role, bind } = KC3BattlePrediction;
      const { parseYasen } = KC3BattlePrediction.battle.phases.yasen;
      const { create } = KC3BattlePrediction.battle.engagement.parserFactory;

      return {
        hougeki: create('midnight', bind(parseYasen, Role.ESCORT_FLEET)),
      };
    },
    [toKey(Player.SINGLE, Enemy.COMBINED, Time.NIGHT)]() {
      const { Role, bind } = KC3BattlePrediction;
      const { parseYasen } = KC3BattlePrediction.battle.phases.yasen;
      const { create } = KC3BattlePrediction.battle.engagement.parserFactory;

      return {
        hougeki: create('midnight', bind(parseYasen, Role.MAIN_FLEET)),
      };
    },
    [toKey(Player.CTF, Enemy.COMBINED, Time.NIGHT)]() {
      const { Role, bind } = KC3BattlePrediction;
      const { parseYasen } = KC3BattlePrediction.battle.phases.yasen;
      const { create } = KC3BattlePrediction.battle.engagement.parserFactory;

      return {
        hougeki: create('midnight', bind(parseYasen, Role.ESCORT_FLEET)),
      };
    },
    [toKey(Player.STF, Enemy.COMBINED, Time.NIGHT)]() {
      const { Role, bind } = KC3BattlePrediction;
      const { parseYasen } = KC3BattlePrediction.battle.phases.yasen;
      const { create } = KC3BattlePrediction.battle.engagement.parserFactory;

      return {
        hougeki: create('midnight', bind(parseYasen, Role.ESCORT_FLEET)),
      };
    },
  };
  /*--------------------------------------------------------*/
  /* ---------------------[ ACCESSOR ]--------------------- */
  /*--------------------------------------------------------*/

  // The engagement types are defined as factory functions to avoid file load order dependencies
  // NB: It may be worth caching instances if performance proves to be an issue
  const getEngagementType = (battleType = {}) => {
    const { types } = KC3BattlePrediction.battle.engagement;

    const key = toKey(battleType.player, battleType.enemy, battleType.time);
    if (!types[key]) {
      throw new Error(`Bad battle type: ${JSON.stringify(battleType)}`);
    }
    return types[key]();
  };

  Object.assign(KC3BattlePrediction.battle.engagement, { getEngagementType, types });
}());
