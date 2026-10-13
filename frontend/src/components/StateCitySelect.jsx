import React from 'react';
import { STATES } from '../data/apLocations';

/**
 * Controlled State + City dropdowns (cities grouped by district).
 * Props: state, city, onChange({ state, city }), required
 */
export default function StateCitySelect({ state = '', city = '', onChange, required = true }) {
  const districts = state ? STATES[state] || {} : {};

  return (
    <div className="row g-2">
      <div className="col-md-6">
        <label className="form-label">State</label>
        <select
          className="form-select"
          value={state}
          required={required}
          onChange={(e) => onChange({ state: e.target.value, city: '' })}
        >
          <option value="">Select state</option>
          {Object.keys(STATES).map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div className="col-md-6">
        <label className="form-label">City / Town</label>
        <select
          className="form-select"
          value={city}
          required={required}
          disabled={!state}
          onChange={(e) => onChange({ state, city: e.target.value })}
        >
          <option value="">{state ? 'Select city' : 'Select state first'}</option>
          {Object.entries(districts).map(([district, cities]) => (
            <optgroup key={district} label={district}>
              {cities.map((c) => (
                <option key={`${district}-${c}`} value={c}>{c}</option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>
    </div>
  );
}
