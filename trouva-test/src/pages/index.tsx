import { PageContentStyle } from '@/components/PageContentStyle/style'
import PageLayout from '@/components/PageLayout'
import { useWindowDimensions } from '@/utils/useWindowDimensions'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import * as geolib from 'geolib'
export interface BoutiquesProps {
  _id: string
  name: string
  slug: string
  location: {
    lon: number
    lat: number
  }
  description: string
  logo?: string
}
export default function Home() {
  const [allBoutiques, setAllBoutiques] = useState<BoutiquesProps[]>([])
  const [pageBoutiques, setPageBoutiques] = useState<BoutiquesProps[]>([])
  const [pageNumber, setPageNumber] = useState(1)
  const [hideMoreButton, setHideMoreButton] = useState(false)
  const [status, setStatus] = useState<string>()
  const [filterActive, setFilterActive] = useState(false)
  const getNearest = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser')
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null)
          if (position.coords.latitude && position.coords.longitude) {
            const boutiquesLocationsNear = geolib
              .orderByDistance(
                {
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                },
                allBoutiques.map((each) => ({
                  lat: each.location.lat,
                  lng: each.location.lon,
                }))
              )
              .slice(0, 5)
            let nearBoutiques: BoutiquesProps[] = []
            boutiquesLocationsNear.map((boutiqueLocation, index) => {
              const find = allBoutiques.find(
                (boutique) =>
                  boutique.location.lat == boutiqueLocation['lat'] &&
                  boutique.location.lon == boutiqueLocation['lng']
              )
              if (find) {
                nearBoutiques.push(find)
              }
            })
            setAllBoutiques(nearBoutiques)
          }
          // setStatus(null)
          // setLat(position.coords.latitude);
          // setLng(position.coords.longitude);
        },
        () => {
          setStatus('Unable to retrieve your location')
        }
      )
    }
  }
  useEffect(() => {
    if (filterActive) {
      setHideMoreButton(true)
      getNearest()
    }
  }, [filterActive])
  useEffect(() => {
    if (!filterActive) {
      setStatus(null)
      setHideMoreButton(false)
      axios
        .get('https://4149o8lffa.execute-api.eu-west-1.amazonaws.com/challenge/boutiques')
        .then(({ data }) => {
          console.log('data', data)
          if (data && data.length > 0) {
            let tempBoutiques: BoutiquesProps[] = []
            data.map((eachBoutique) => {
              tempBoutiques.push({
                _id: eachBoutique._id,
                description: eachBoutique.description,
                location: {
                  lat: eachBoutique.location.lat,
                  lon: eachBoutique.location.lon,
                },
                name: eachBoutique.name,
                slug: eachBoutique.slug,
                logo: eachBoutique.logo ? eachBoutique.logo.url : '',
              })
            })
            setAllBoutiques(tempBoutiques)
          }
        })
    }
  }, [filterActive])
  useEffect(() => {
    let tempBoutiques: BoutiquesProps[] = []
    if (pageNumber == 1) {
      tempBoutiques = allBoutiques.slice(0, 9)
      setPageBoutiques([...tempBoutiques])
    } else {
      tempBoutiques = allBoutiques.slice(9 * (pageNumber - 1) + 1, 9 * pageNumber + 1)
      setPageBoutiques([...pageBoutiques, ...tempBoutiques])
      if (tempBoutiques.length == 0) {
        setHideMoreButton(true)
      }
    }
  }, [pageNumber, allBoutiques])
  return (
    <PageLayout>
      <PageContentStyle>
        <h1 className="page-title">Boutiques</h1>
        <div className={`filter-button ${filterActive ? 'active' : ''}`} onClick={() => setFilterActive(!filterActive)}>
          Filter 5 near by
        </div>
        {status && <p className='status'>{status}</p> }
        <div className="boutiques-wrapper">
          {pageBoutiques.map((eachBoutique) => (
            <div className="boutique-wrapper">
              <div className="image-wrapper">
                <img width="100%" height="100%" src={eachBoutique.logo} alt="Boutique Image" />
              </div>
              <p>{eachBoutique.name}</p>
            </div>
          ))}
        </div>
        {!hideMoreButton && (
          <div onClick={() => setPageNumber(pageNumber + 1)} className="more-button">
            +
          </div>
        )}
      </PageContentStyle>
    </PageLayout>
  )
}
