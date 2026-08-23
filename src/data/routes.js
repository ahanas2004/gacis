// ═══════════════════════════════════════════════════════════════════════════
// Centralized Corridor & Route Intelligence Data Definition
// Now powered by the dynamic calculation engine
// ═══════════════════════════════════════════════════════════════════════════

import {
  calculateFullRoute,
  hubDatabase,
  getOriginOptions,
  getDestinationOptions,
  getCargoOptions,
  getPriorityOptions,
  modeOptions
} from './routeCalculationEngine';

// ─── Preset Corridor Definitions ──────────────────────────────────────────
// Featured trade lanes — values are dynamically calculated from the engine
const PRESET_DEFINITIONS = [
  { id: 'dubai-almaty', originId: 'dubai', destId: 'almaty', name: 'Gulf to Central Asia Gateway' },
  { id: 'klang-london', originId: 'klang', destId: 'london', name: 'Southeast Asia to Western Europe' },
  { id: 'chennai-frankfurt', originId: 'chennai', destId: 'frankfurt', name: 'India Pharma & Auto Express' },
  { id: 'colombo-tashkent', originId: 'colombo', destId: 'tashkent', name: 'Indian Ocean to Silk Corridor' }
];

// Generate preset routes dynamically from the engine
export const presetRoutes = PRESET_DEFINITIONS.map(preset => {
  const calculated = calculateFullRoute({
    originId: preset.originId,
    destId: preset.destId,
    cargoType: 'Industrial Machinery',
    priority: 'Standard',
    mode: 'Multimodal'
  });

  if (!calculated) {
    // Fallback — should never happen for known presets
    return {
      id: preset.id,
      name: preset.name,
      origin: hubDatabase[preset.originId]?.shortLabel || preset.originId,
      destination: hubDatabase[preset.destId]?.shortLabel || preset.destId,
      originFlag: hubDatabase[preset.originId]?.flag || '',
      destFlag: hubDatabase[preset.destId]?.flag || '',
      transitTime: 0,
      carbonSavings: 0,
      budgetIndex: 50,
      reliability: 95,
      optCO2: 0,
      convCO2: 0,
      avoidedCO2: 0,
      handlingPoints: '02',
      primaryMode: 'Multimodal',
      strategy: '',
      sequence: [],
      alternatives: []
    };
  }

  return {
    id: preset.id,
    name: preset.name,
    _originId: preset.originId,
    _destId: preset.destId,
    ...calculated
  };
});

// ─── Dynamic Route Calculator ─────────────────────────────────────────────
// Full engine-powered calculation for custom routes
export function calculateSimulatedRoute({ originId, destId, cargoType, priority, mode }) {
  const result = calculateFullRoute({
    originId: originId || 'dubai',
    destId: destId || 'almaty',
    cargoType: cargoType || 'Industrial Machinery',
    priority: priority || 'Standard',
    mode: mode || 'Multimodal'
  });

  if (!result) {
    // Edge case fallback
    return {
      origin: 'Unknown',
      destination: 'Unknown',
      transitTime: 0,
      carbonSavings: 0,
      budgetIndex: 50,
      reliability: 95,
      optCO2: 0,
      convCO2: 0,
      avoidedCO2: 0,
      handlingPoints: '02',
      primaryMode: 'N/A',
      strategy: 'Unable to calculate route for this combination.',
      sequence: [],
      alternatives: []
    };
  }

  return result;
}

// Re-export dropdown helpers
export {
  getOriginOptions,
  getDestinationOptions,
  getCargoOptions,
  getPriorityOptions,
  modeOptions,
  hubDatabase
};
